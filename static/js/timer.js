setInterval(() => {
  const nowTime = new Date();
  let nowHour = nowTime.getHours();
  let helloTimeString;
  if (nowHour >= 6 && nowHour < 12) {
    helloTimeString = "Good morning";
  } else if (nowHour >= 12 && nowHour < 18) {
    helloTimeString = "Good evening";
  } else if (nowHour >= 18 && nowHour < 6) {
    helloTimeString = "Good night";
  }
  $("#goodTime > h2").html(helloTimeString);
  if ((audio.currentTime / audio.duration) * 10000 < 30) {
    $("#rangeBar").val("0");
  } else {
    $("#rangeBar").val((audio.currentTime / audio.duration) * 10000);
  }
  if (audio.paused) {
    mc.setPlayPause = false;
    $("#play").removeClass("xi-pause");
    $("#play").addClass("xi-play");
  }
  if (!audio.paused) {
    mc.setPlayPause = true;
    $("#play").addClass("xi-pause");
    $("#play").removeClass("xi-play");
  }
  if (audio.ended) {
    if (betaMusic == true) {
      mc.musicList.pop();
      if (betaMusicNumber < betaMusicMaxNumber - 1) {
        betaMusicNumber++;
        $(".music").eq(betaMusicNumber).trigger("click");
      } else {
        betaMusicNumber = 0;
        $(".music").eq(betaMusicNumber).trigger("click");
      }
    } else {
      if (shuffleOptionState) {
        mc.setNowPlayNumber = Math.floor(Math.random() * mc.musicList.length);
      } else {
        mc.setNowPlayNumber = ++mc.getNowPlayNumber;
      }
      audio.src = `../audio/${mc.musicList[mc.getNowPlayNumber].src}`;
      audio.play();
      setTimeout(() => {
        $(".backgroundColorSel")[0]?.scrollIntoView({
          behavior: "smooth",
          block: "end",
        });
      }, 400);
    }
  }
  $(".musicPhoto").css(
    "background-image",
    `url('./img/music_img/${mc.musicList[mc.getNowPlayNumber]["img"]}')`
  );
  $(".musicTitle").html(
    `${mc.musicList[mc.getNowPlayNumber]["music_name"]}<p class="singerInfo">${
      mc.musicList[mc.getNowPlayNumber]["singer_name"]
    }</p>`
  );
  $(`.playListList`).eq(mc.nowPlayNumber).addClass("backgroundColorSel");
  $(`.playListList`)
    .eq(mc.nowPlayNumber)
    .siblings(".playListList")
    .removeClass("backgroundColorSel");
  $(`.playListListLibrary`).eq(mc.nowPlayNumber).addClass("backgroundColorSel");
  $(`.playListListLibrary`)
    .eq(mc.nowPlayNumber)
    .siblings(".playListList")
    .removeClass("backgroundColorSel");
}, 500);
setInterval(() => {
  let min = Math.floor(audio.currentTime / 60);
  let sec = Math.floor(audio.currentTime % 60);
  if (String(sec).length < 2) {
    sec = 0 + String(sec);
  }
  $("#nowCurrentTime").html(`${min}:${sec}`);
  if (audio.duration) {
    min = Math.floor(audio.duration / 60);
    sec = Math.floor(audio.duration % 60);
    if (String(sec).length < 2) {
      sec = 0 + String(sec);
    }
    $("#totalTime").html(`${min}:${sec}`);
  }
  if (titleMove) {
    $(".musicTitle").scrollLeft($(".musicTitle").scrollLeft() + 8);
  }
  if (titleMove2) {
    $(titleMove2E).scrollLeft($(titleMove2E).scrollLeft() + 8);
  }
}, 50);
