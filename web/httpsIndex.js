const express = require("express");
const https = require("https");
const fs = require("fs");
const mysql2 = require("mysql2");
const dbInfo = require("../config/dbInfo.js");
const connection = mysql2.createPool(dbInfo);
const mysqlPromise = connection.promise();
const app = express();
const cookieParser = require("cookie-parser");
const bodyParser = require("body-parser");
const option = {
  key: fs.readFileSync("../SSL/rabbitfy.pem"),
  cert: fs.readFileSync("../SSL/rabbitfy.cert"),
  passphrase: "404N07F0UND3rr0r",
};
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.set("views", "../views/pug");
app.set("view engine", "pug");
app.use(express.static("../static"));
app.get("/", async (req, res) => {
  console.log(req.cookies.loginInfo);
  if (!req.cookies.loginInfoID || !req.cookies.loginInfoPW) {
    res.redirect("/login");
  }
  let [resultLibrary] = await mysqlPromise.query(`SELECT * FROM library_list`);
  let [singerResult] = await mysqlPromise.query(
    `SELECT * FROM singer_list LIMIT 6`
  );
  let [dailyMix] = await mysqlPromise.query(
    `SELECT * FROM daily_mix_list LIMIT 5`
  );
  let [albumResult] = await mysqlPromise.query(
    `SELECT * FROM album_list LIMIT 5`
  );
  let [[user_img]] = await mysqlPromise.query(
    `SELECT img_src FROM library_list WHERE library_name = '${req.cookies.loginInfoID}'`
  );
  console.log(user_img);
  console.log(resultLibrary);
  console.log(singerResult);
  console.log(dailyMix);
  res.render("index", {
    resultLibrary: resultLibrary,
    singerResult: singerResult,
    dailyMixResult: dailyMix,
    albumResult: albumResult,
    name: req.cookies.loginInfoID,
    imgSrc: user_img,
  });
});
app.get("/testing", async (req, res) => {
  let [resultLibrary] = await mysqlPromise.query(`SELECT * FROM library_list`);
  let [singerResult] = await mysqlPromise.query(
    `SELECT * FROM singer_list LIMIT 6`
  );
  let [dailyMix] = await mysqlPromise.query(
    `SELECT * FROM daily_mix_list LIMIT 5`
  );
  let [albumResult] = await mysqlPromise.query(
    `SELECT * FROM album_list LIMIT 5`
  );

  console.log(resultLibrary);
  console.log(singerResult);
  console.log(dailyMix);
  res.render("view", {
    resultLibrary: resultLibrary,
    singerResult: singerResult,
    dailyMixResult: dailyMix,
    albumResult: albumResult,
  });
});
app.get("/playListSearch", async (req, res) => {
  console.log(req.query.searchString);
  let [resultSearch] = await mysqlPromise.query(
    `SELECT * FROM music_list WHERE music_name LIKE '%${req.query.searchString}%' OR singer_name LIKE '%${req.query.searchString}%'`
  );
  console.log(resultSearch);
  res.json(resultSearch);
});
app.get("/playListLibrary", async (req, res) => {
  let [resultLibrary] = await mysqlPromise.query(`SELECT * FROM library_list`);
  res.json(resultLibrary);
});
app.get("/artistLibrary", async (req, res) => {
  let [resultArtistLibrary] = await mysqlPromise.query(
    `SELECT * FROM music_list WHERE singer_name LIKE '${req.query.searchString}'`
  );
  res.json(resultArtistLibrary);
});
app.get("/dailyMix", async (req, res) => {
  let [resultMixLibrary] = await mysqlPromise.query(
    `SELECT * FROM ${req.query.dailyMixTitle.replace(/ /g, "_").toLowerCase()}`
  );
  console.log(resultMixLibrary);
  res.json(resultMixLibrary);
});
app.get("/librarySearch", async (req, res) => {
  let [resultLibrary] = await mysqlPromise.query(
    `SELECT * FROM ${req.query.libraryTitle.replace(/ /g, "_")}`
  );
  if (req.query.libraryTitle == req.cookies.loginInfoID) {
    res.json({ dbData: resultLibrary, yours: true });
  } else {
    res.json({ dbData: resultLibrary, yours: false });
  }
});
app.get("/albumSearch", async (req, res) => {
  let [resultMixLibrary] = await mysqlPromise.query(
    `SELECT * FROM music_list WHERE album LIKE "${req.query.albumTitle}"`
  );
  console.log(resultMixLibrary);
  res.json(resultMixLibrary);
});
app.get("/login", (req, res) => {
  res.render("login");
});
app.post("/loginInfo", async (req, res) => {
  let [[loginInfo]] = await mysqlPromise.query(
    `SELECT * FROM login_info_list WHERE id_info LIKE "${req.body.id}" AND pw_info LIKE "${req.body.pw}"`
  );
  console.log(loginInfo);
  if (loginInfo?.id_info && loginInfo?.pw_info) {
    res.send(true);
  } else {
    res.send(false);
  }
});
app.post("/givCookie", async (req, res) => {
  let [[loginInfo]] = await mysqlPromise.query(
    `SELECT * FROM login_info_list WHERE id_info LIKE "${req.body.id}" AND pw_info LIKE "${req.body.pw}"`
  );
  if (loginInfo?.id_info && loginInfo?.pw_info) {
    res.cookie("loginInfoID", req.body.id, {
      path: "/",
    });
    res.cookie("loginInfoPW", req.body.pw, {
      path: "/",
    });
  }
  res.redirect("/");
});
app.post("/createAccount", async (req, res) => {
  await mysqlPromise.query(
    `INSERT INTO login_info_list (id_info, pw_info) VALUES ('${req.body.id}', '${req.body.pw}')`
  );
  await mysqlPromise.query(`CREATE TABLE IF NOT EXISTS ${req.body.id} (
  id int(11) NOT NULL AUTO_INCREMENT,
  music_name char(100) NOT NULL,
  singer_name char(100) NOT NULL,
  top int(11) DEFAULT NULL,
  img varchar(255) NOT NULL,
  music_src varchar(255) NOT NULL,
  PRIMARY KEY (id)
  ) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;`);
  await mysqlPromise.query(
    `INSERT INTO library_list (library_name, maker_name, img_src) VALUES ('${req.body.id}', '${req.body.id}', 'who.jpg')`
  );
  res.cookie("loginInfoID", req.body.id, {
    path: "/",
  });
  res.cookie("loginInfoPW", req.body.pw, {
    path: "/",
  });
  res.redirect("/choosePhoto");
});
app.delete("/libraryDelete", async (req, res) => {
  console.log(req.body.title);
  await mysqlPromise.query(
    `DELETE FROM ${req.cookies.loginInfoID} WHERE music_name LIKE '${req.body.title}'`
  );
  res.send("true");
});
app.post("/addImg", async (req, res) => {
  console.log(req.body.src);
  await mysqlPromise.query(
    `UPDATE library_list SET img_src = '${req.body.imgSrc}' WHERE library_name = '${req.cookies.loginInfoID}'`
  );
  res.redirect("/");
});
app.get("/choosePhoto", async (req, res) => {
  let [imgArray] = await mysqlPromise.query("SELECT * FROM img_list");
  res.render("choosePhoto", { imgArray: imgArray });
});
//app.post("/libraryInsert", async (req, res) => {
//  await mysqlPromise.query(
//    `IF NOT EXISTS (SELECT music_name FROM ${req.cookies.loginInfoID} WHERE music_name = "${req.body.title}") THEN
//    INSERT INTO ${req.cookies.loginInfoID} (music_name, singer_name, img, music_src)
//    VALUES ("${req.body.title}", "${req.body.singer}", "${req.body.img}", "${req.body.src}");
//  END IF;`,
//  );
//  res.send("ok");
//});
app.post("/libraryInsert", async (req, res) => {
  const query = `
    SELECT COUNT(*) AS count FROM ${req.cookies.loginInfoID} WHERE music_name = ?
  `;
  const insertQuery = `
    INSERT INTO ${req.cookies.loginInfoID} (music_name, singer_name, img, music_src)
    VALUES (?, ?, ?, ?)
  `;
  const [rows] = await mysqlPromise.query(query, [req.body.title]);
  const count = rows[0].count;
  if (count === 0) {
    await mysqlPromise.query(insertQuery, [
      req.body.title,
      req.body.singer,
      req.body.img,
      req.body.src,
    ]);
  }
  res.send("ok");
});
const server = https.createServer(option, app);
server.listen(4201, () => {
  console.log("port: 4201");
});
app.listen(3000, () => {
  console.log("port: 3000");
});
