"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

var express = require("express");

var mysql2 = require("mysql2");

var dbInfo = require("../config/dbInfo.js");

var connection = mysql2.createPool(dbInfo);
var mysqlPromise = connection.promise();
var app = express();

var cookieParser = require("cookie-parser");

var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.set("views", "../views/pug");
app.set("view engine", "pug");
app.use(express["static"]("../static"));
app.get("/", function _callee(req, res) {
  var _ref, _ref2, resultLibrary, _ref3, _ref4, singerResult, _ref5, _ref6, dailyMix, _ref7, _ref8, albumResult;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          console.log(req.cookies.loginInfo);

          if (!req.cookies.loginInfoID || !req.cookies.loginInfoPW) {
            res.redirect("/login");
          }

          _context.next = 4;
          return regeneratorRuntime.awrap(mysqlPromise.query("SELECT * FROM library_list"));

        case 4:
          _ref = _context.sent;
          _ref2 = _slicedToArray(_ref, 1);
          resultLibrary = _ref2[0];
          _context.next = 9;
          return regeneratorRuntime.awrap(mysqlPromise.query("SELECT * FROM singer_list LIMIT 6"));

        case 9:
          _ref3 = _context.sent;
          _ref4 = _slicedToArray(_ref3, 1);
          singerResult = _ref4[0];
          _context.next = 14;
          return regeneratorRuntime.awrap(mysqlPromise.query("SELECT * FROM daily_mix_list LIMIT 5"));

        case 14:
          _ref5 = _context.sent;
          _ref6 = _slicedToArray(_ref5, 1);
          dailyMix = _ref6[0];
          _context.next = 19;
          return regeneratorRuntime.awrap(mysqlPromise.query("SELECT * FROM album_list LIMIT 5"));

        case 19:
          _ref7 = _context.sent;
          _ref8 = _slicedToArray(_ref7, 1);
          albumResult = _ref8[0];
          console.log(resultLibrary);
          console.log(singerResult);
          console.log(dailyMix);
          res.render("index", {
            resultLibrary: resultLibrary,
            singerResult: singerResult,
            dailyMixResult: dailyMix,
            albumResult: albumResult
          });

        case 26:
        case "end":
          return _context.stop();
      }
    }
  });
});
app.get("/testing", function _callee2(req, res) {
  var _ref9, _ref10, resultLibrary, _ref11, _ref12, singerResult, _ref13, _ref14, dailyMix, _ref15, _ref16, albumResult;

  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.next = 2;
          return regeneratorRuntime.awrap(mysqlPromise.query("SELECT * FROM library_list"));

        case 2:
          _ref9 = _context2.sent;
          _ref10 = _slicedToArray(_ref9, 1);
          resultLibrary = _ref10[0];
          _context2.next = 7;
          return regeneratorRuntime.awrap(mysqlPromise.query("SELECT * FROM singer_list LIMIT 6"));

        case 7:
          _ref11 = _context2.sent;
          _ref12 = _slicedToArray(_ref11, 1);
          singerResult = _ref12[0];
          _context2.next = 12;
          return regeneratorRuntime.awrap(mysqlPromise.query("SELECT * FROM daily_mix_list LIMIT 5"));

        case 12:
          _ref13 = _context2.sent;
          _ref14 = _slicedToArray(_ref13, 1);
          dailyMix = _ref14[0];
          _context2.next = 17;
          return regeneratorRuntime.awrap(mysqlPromise.query("SELECT * FROM album_list LIMIT 5"));

        case 17:
          _ref15 = _context2.sent;
          _ref16 = _slicedToArray(_ref15, 1);
          albumResult = _ref16[0];
          console.log(resultLibrary);
          console.log(singerResult);
          console.log(dailyMix);
          res.render("view", {
            resultLibrary: resultLibrary,
            singerResult: singerResult,
            dailyMixResult: dailyMix,
            albumResult: albumResult
          });

        case 24:
        case "end":
          return _context2.stop();
      }
    }
  });
});
app.get("/playListSearch", function _callee3(req, res) {
  var _ref17, _ref18, resultSearch;

  return regeneratorRuntime.async(function _callee3$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          console.log(req.query.searchString);
          _context3.next = 3;
          return regeneratorRuntime.awrap(mysqlPromise.query("SELECT * FROM music_list WHERE music_name LIKE '%".concat(req.query.searchString, "%' OR singer_name LIKE '%").concat(req.query.searchString, "%'")));

        case 3:
          _ref17 = _context3.sent;
          _ref18 = _slicedToArray(_ref17, 1);
          resultSearch = _ref18[0];
          console.log(resultSearch);
          res.json(resultSearch);

        case 8:
        case "end":
          return _context3.stop();
      }
    }
  });
});
app.get("/playListLibrary", function _callee4(req, res) {
  var _ref19, _ref20, resultLibrary;

  return regeneratorRuntime.async(function _callee4$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          _context4.next = 2;
          return regeneratorRuntime.awrap(mysqlPromise.query("SELECT * FROM library_list"));

        case 2:
          _ref19 = _context4.sent;
          _ref20 = _slicedToArray(_ref19, 1);
          resultLibrary = _ref20[0];
          res.json(resultLibrary);

        case 6:
        case "end":
          return _context4.stop();
      }
    }
  });
});
app.get("/artistLibrary", function _callee5(req, res) {
  var _ref21, _ref22, resultArtistLibrary;

  return regeneratorRuntime.async(function _callee5$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          _context5.next = 2;
          return regeneratorRuntime.awrap(mysqlPromise.query("SELECT * FROM music_list WHERE singer_name LIKE '".concat(req.query.searchString, "'")));

        case 2:
          _ref21 = _context5.sent;
          _ref22 = _slicedToArray(_ref21, 1);
          resultArtistLibrary = _ref22[0];
          res.json(resultArtistLibrary);

        case 6:
        case "end":
          return _context5.stop();
      }
    }
  });
});
app.get("/dailyMix", function _callee6(req, res) {
  var _ref23, _ref24, resultMixLibrary;

  return regeneratorRuntime.async(function _callee6$(_context6) {
    while (1) {
      switch (_context6.prev = _context6.next) {
        case 0:
          _context6.next = 2;
          return regeneratorRuntime.awrap(mysqlPromise.query("SELECT * FROM ".concat(req.query.dailyMixTitle.replace(/ /g, "_").toLowerCase())));

        case 2:
          _ref23 = _context6.sent;
          _ref24 = _slicedToArray(_ref23, 1);
          resultMixLibrary = _ref24[0];
          console.log(resultMixLibrary);
          res.json(resultMixLibrary);

        case 7:
        case "end":
          return _context6.stop();
      }
    }
  });
});
app.get("/librarySearch", function _callee7(req, res) {
  var _ref25, _ref26, resultLibrary;

  return regeneratorRuntime.async(function _callee7$(_context7) {
    while (1) {
      switch (_context7.prev = _context7.next) {
        case 0:
          _context7.next = 2;
          return regeneratorRuntime.awrap(mysqlPromise.query("SELECT * FROM ".concat(req.query.libraryTitle.replace(/ /g, "_").toLowerCase())));

        case 2:
          _ref25 = _context7.sent;
          _ref26 = _slicedToArray(_ref25, 1);
          resultLibrary = _ref26[0];
          console.log(resultLibrary);
          res.json(resultLibrary);

        case 7:
        case "end":
          return _context7.stop();
      }
    }
  });
});
app.get("/albumSearch", function _callee8(req, res) {
  var _ref27, _ref28, resultMixLibrary;

  return regeneratorRuntime.async(function _callee8$(_context8) {
    while (1) {
      switch (_context8.prev = _context8.next) {
        case 0:
          _context8.next = 2;
          return regeneratorRuntime.awrap(mysqlPromise.query("SELECT * FROM music_list WHERE album LIKE \"".concat(req.query.albumTitle, "\"")));

        case 2:
          _ref27 = _context8.sent;
          _ref28 = _slicedToArray(_ref27, 1);
          resultMixLibrary = _ref28[0];
          console.log(resultMixLibrary);
          res.json(resultMixLibrary);

        case 7:
        case "end":
          return _context8.stop();
      }
    }
  });
});
app.get("/login", function (req, res) {
  res.render("login");
});
app.post("/loginInfo", function _callee9(req, res) {
  var _ref29, _ref30, _ref30$, loginInfo;

  return regeneratorRuntime.async(function _callee9$(_context9) {
    while (1) {
      switch (_context9.prev = _context9.next) {
        case 0:
          _context9.next = 2;
          return regeneratorRuntime.awrap(mysqlPromise.query("SELECT * FROM login_info_list WHERE id_info LIKE \"".concat(req.body.id, "\" AND pw_info LIKE \"").concat(req.body.pw, "\"")));

        case 2:
          _ref29 = _context9.sent;
          _ref30 = _slicedToArray(_ref29, 1);
          _ref30$ = _slicedToArray(_ref30[0], 1);
          loginInfo = _ref30$[0];
          console.log(loginInfo);

          if (loginInfo.id_info && loginInfo.pw_info) {
            res.send(true);
          } else {
            res.send(false);
          }

        case 8:
        case "end":
          return _context9.stop();
      }
    }
  });
});
app.post("/givCookie", function _callee10(req, res) {
  return regeneratorRuntime.async(function _callee10$(_context10) {
    while (1) {
      switch (_context10.prev = _context10.next) {
        case 0:
          res.cookie("loginInfoID", req.body.id, {
            path: "/"
          });
          res.cookie("loginInfoPW", req.body.pw, {
            path: "/"
          });
          res.redirect("/");

        case 3:
        case "end":
          return _context10.stop();
      }
    }
  });
});
app.listen(3000, function () {
  console.log("port: 3000");
});