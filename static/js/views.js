let defaultMainPage = $("#mainItem").html();
console.log(defaultMainPage);
$("#searchBar").on("input", () => {
  $.ajax({
    type: "GET",
    url: "/playListSearch",
    data: { searchString: $("#searchBar").val() },
  }).done((data) => {
    console.log(`data: ${data}`);
    let ajaxString = "<div class='overflowScroll'><div class='playList'>";
    for (let value of data) {
      console.log(value.img);
      ajaxString += `<div class="playListItem music"><div class="playListItemImg" data-src="${value.music_src}" data-img="${value.img}" style="background-image: url('./img/music_img/${value.img}')"></div><div class="playListItemTitle">${value.music_name}</div><div class="playListSinger">${value.singer_name}</div><i class="xi-plus-circle-o"></i></div>`;
    }
    ajaxString += "</div></div>";
    $("#mainItem").html(ajaxString);
  });
});
$("#home").on("click", () => {
  $("#mainItem").html(defaultMainPage);
  $(".navSelect > p").removeClass("selectClick");
  $("#home").addClass("selectClick");
});
$("#search").on("click", () => {
  $.ajax({
    type: "GET",
    url: "/playListSearch",
    data: { searchString: "" },
  }).done((data) => {
    console.log(`data: ${data}`);
    let ajaxString = "<div class='overflowScroll'><div class='playList'>";
    for (let value of data) {
      console.log(value.img);
      ajaxString += `<div class="playListItem music"><div class="playListItemImg" data-src="${value.music_src}" data-img="${value.img}" style="background-image: url('./img/music_img/${value.img}')"></div><div class="playListItemTitle">${value.music_name}</div><div class="playListSinger">${value.singer_name}</div><i class="xi-plus-circle-o"></i></div>`;
    }
    ajaxString += "</div></div>";
    preEvent = ajaxString;
    $("#mainItem").html(ajaxString);
  });
  $(".navSelect > p").removeClass("selectClick");
  $("#search").addClass("selectClick");
});
$("#library").on("click", () => {
  $.ajax({
    type: "GET",
    url: "/playListLibrary",
  }).done((data) => {
    console.log(`data: ${data}`);
    let ajaxString = "<div class='overflowScroll'><div class='playList'>";
    for (let value of data) {
      console.log(value.img);
      ajaxString += `<div class="playListItem libraryItem"><div class="playListItemImg" style="background-image: url('./img/library_img/${value.img_src}')"></div><div class="playListItemTitle">${value.library_name}</div><div class="playListSinger">${value.maker_name}</div></div>`;
    }
    ajaxString += "</div></div>";
    preEvent = ajaxString;
    $("#mainItem").html(ajaxString);
  });
  $(".navSelect > p").removeClass("selectClick");
  $("#library").addClass("selectClick");
});
$("#playListLibrary").on("click", () => {
  let innerString =
    "<div class='overflowScroll'><div class='playList margin-left10'><h3>PlayList</h3>";
  for (let j in mc.musicList) {
    console.log(j);
    if (mc.musicList[j].display == true) {
      innerString += `<div class="playListItem playListList playListListLibrary" data-number="${j}" style="display: none;"><div class="playListItemImg" style="background-image: url('./img/music_img/${mc.musicList[j].img}')"></div><div class="playListItemTitle">${mc.musicList[j].music_name}</div><div class="playListSinger">${mc.musicList[j].singer_name}</div><div class="xi-close-circle-o cancelButton"></div></div>`;
    } else {
      innerString += `<div class="playListItem playListList playListListLibrary" data-number="${j}"><div class="playListItemImg" style="background-image: url('./img/music_img/${mc.musicList[j].img}')"></div><div class="playListItemTitle">${mc.musicList[j].music_name}</div><div class="playListSinger">${mc.musicList[j].singer_name}</div><div class="xi-close-circle-o cancelButton"></div></div>`;
    }
  }
  innerString += "</div></div>";
  preEvent = innerString;
  $("#mainItem").html(innerString);
  //innerString = "";
  //for (let j in mc.musicList) {
  //  innerString += `<div class='playListItem playListList' data-number="${j}"><div></div><div><p class='libraryTitle'>${mc.musicList[j].music_name}</p><p class="makerName">${mc.musicList[j].singer_name}</p></div></div>`;
  //}
  //$(".library").html(innerString);
});
$(document).on("click", ".artist", (e) => {
  $.ajax({
    type: "GET",
    url: "/artistLibrary",
    data: { searchString: $(e.currentTarget).children("p").html() },
  }).done((data) => {
    let innerString = "<div class='overflowScroll'><div class='playList'>";
    for (let value of data) {
      innerString += `<div class="playListItem music"><div class="playListItemImg" data-src="${value.music_src}" data-img="${value.img}" style="background-image: url('./img/music_img/${value.img}')"></div><div class="playListItemTitle">${value.music_name}</div><div class="playListSinger">${value.singer_name}</div><i class="xi-plus-circle-o"></i></div>`;
    }
    innerString += "</div></div>";
    preEvent = innerString;
    $("#mainItem").html(innerString);
  });
});
$(document).on("click", ".dailyMix", (e) => {
  $.ajax({
    type: "GET",
    url: "/dailyMix",
    data: { dailyMixTitle: $(e.currentTarget).children(".mainP").html() },
  }).done((data) => {
    let innerString = "<div class='overflowScroll'><div class='playList'>";
    for (let value of data) {
      innerString += `<div class="playListItem music"><div class="playListItemImg" data-src="${value.music_src}" data-img="${value.img}" style="background-image: url('./img/music_img/${value.img}')"></div><div class="playListItemTitle">${value.music_name}</div><div class="playListSinger">${value.singer_name}</div><i class="xi-plus-circle-o"></i></div>`;
    }
    innerString += "</div></div>";
    preEvent = innerString;
    $("#mainItem").html(innerString);
  });
});
$(document).on("click", ".album", (e) => {
  $.ajax({
    type: "GET",
    url: "/albumSearch",
    data: { albumTitle: $(e.currentTarget).children(".mainP").html() },
  }).done((data) => {
    let innerString = "<div class='overflowScroll'><div class='playList'>";
    for (let value of data) {
      innerString += `<div class="playListItem music"><div class="playListItemImg" data-src="${value.music_src}" data-img="${value.img}" style="background-image: url('./img/music_img/${value.img}')"></div><div class="playListItemTitle">${value.music_name}</div><div class="playListSinger">${value.singer_name}</div><i class="xi-plus-circle-o"></i></div>`;
    }
    innerString += "</div></div>";
    preEvent = innerString;
    $("#mainItem").html(innerString);
  });
});
$(".library > div").on("click", (e) => {
  $.ajax({
    type: "GET",
    url: "/librarySearch",
    xhrFields: { withCredentials: true },
    data: { libraryTitle: $(e.currentTarget).find(".libraryTitle").html() },
  }).done((data) => {
    console.log(data);
    let innerString = "<div class='overflowScroll'><div class='playList'>";
    for (let value of data.dbData) {
      if (data.yours) {
        innerString += `<div class="playListItem music"><div class="playListItemImg" data-src="${value.music_src}" data-img="${value.img}" style="background-image: url('./img/music_img/${value.img}')"></div><div class="playListItemTitle">${value.music_name}</div><div class="playListSinger">${value.singer_name}</div><i class="xi-close-square-o libraryClose"></i></div>`;
      } else {
        innerString += `<div class="playListItem music"><div class="playListItemImg" data-src="${value.music_src}" data-img="${value.img}" style="background-image: url('./img/music_img/${value.img}')"></div><div class="playListItemTitle">${value.music_name}</div><div class="playListSinger">${value.singer_name}</div></div>`;
      }
    }
    innerString += "</div></div>";
    preEvent = innerString;
    $("#mainItem").html(innerString);
  });
});
$(document).on("click", ".libraryItem", (e) => {
  $.ajax({
    type: "GET",
    url: "/librarySearch",
    xhrFields: { withCredentials: true },
    data: {
      libraryTitle: $(e.currentTarget).find(".playListItemTitle").html(),
    },
  }).done((data) => {
    let innerString = "<div class='overflowScroll'><div class='playList'>";
    for (let value of data.dbData) {
      if (data.yours) {
        innerString += `<div class="playListItem music"><div class="playListItemImg" data-src="${value.music_src}" data-img="${value.img}" style="background-image: url('./img/music_img/${value.img}')"></div><div class="playListItemTitle">${value.music_name}</div><div class="playListSinger">${value.singer_name}</div><i class="xi-close-square-o libraryClose"></i></div>`;
      } else {
        innerString += `<div class="playListItem music"><div class="playListItemImg" data-src="${value.music_src}" data-img="${value.img}" style="background-image: url('./img/music_img/${value.img}')"></div><div class="playListItemTitle">${value.music_name}</div><div class="playListSinger">${value.singer_name}</div></div>`;
      }
    }
    innerString += "</div></div>";
    preEvent = innerString;
    $("#mainItem").html(innerString);
  });
});
$(document).on("click", ".playListList", (e) => {
  if (betaMusic == true) {
    betaMusic = false;
    mc.musicList.pop();
  }
  audio.src = `../audio/${
    mc.musicList[$(e.currentTarget).data("number")]["src"]
  }`;
  mc.setNowPlayNumber = $(e.currentTarget).data("number");
  setTimeout(() => {
    $(".backgroundColorSel")[0]?.scrollIntoView({
      behavior: "smooth",
      block: "end",
    });
  }, 400);
});
$(document).on("click", ".cancelButton", (e) => {
  e.stopPropagation();
  if (betaMusic) {
    mc.musicList.pop();
    betaMusic = false;
  }
  mc.musicList.splice(
    Number($(e.currentTarget).parent(".playListList").data("number")),
    1
  );
  $("#playListLibrary").trigger("click");
});
$("h1").on("click", () => {
  $("#mainItem").html(defaultMainPage);
});
$(".xi-angle-left").on("click", () => {
  $("#mainItem").html(defaultMainPage);
  $(".xi-angle-right").removeClass("selectClick");
});
$(".xi-angle-right").on("click", () => {
  $("#mainItem").html(preEvent);
  $(".xi-angle-right").addClass("selectClick");
});
$(document).on("click", "#playListLibrary", () => {
  $("#playListLibrary").addClass("clickScale");
  setTimeout(() => {
    $("#playListLibrary").removeClass("clickScale");
  }, 500);
});
let preEvent;
$(document).on("click", ".libraryClose", (e) => {
  e.stopPropagation();
  console.log($(e.currentTarget).siblings(".playListItemTitle").html());
  $.ajax({
    type: "delete",
    url: "/libraryDelete",
    xhrFields: { withCredentials: true },
    data: { title: $(e.currentTarget).siblings(".playListItemTitle").html() },
  }).done(() => {
    $(".libraryTitle")
      .filter((i, v) => {
        return $(v).text() === $(".userName").html();
      })
      .trigger("click");
  });
});
// $(document).on("click", ".xi-plus-circle-o", (e) => {
//   $(e.currentTarget).addClass("clickScale");
//   setTimeout(() => {
//     $(e.currentTarget).removeClass("clickScale");
//   }, 300);
//   e.stopPropagation();
//   $.ajax({
//     type: "post",
//     url: "/libraryInsert",
//     xhrFields: { withCredentials: true },
//     data: {
//       title: $(e.currentTarget).siblings(".playListItemTitle").html(),
//       singer: $(e.currentTarget).siblings(".playListSinger").html(),
//       src: $(e.currentTarget).siblings(".playListItemImg").data("src"),
//       img: $(e.currentTarget).siblings(".playListItemImg").data("img"),
//     },
//   });
// });
//$(document).on("click", ".xi-plus-circle-o", (e) => {
//  $(e.currentTarget).parent("div").trigger("click");
//});
$(".userIcon").on("click", () => {
  location.href = "/choosePhoto";
});
$(".musicTitle").on("mouseenter", () => {
  titleMove = true;
});
$(".musicTitle").on("mouseout", () => {
  titleMove = false;
  $(".musicTitle").scrollLeft(0);
});
$(document).on("mouseenter", ".libraryTitle", (e) => {
  $(e.currentTarget).addClass("moveTitle");
  titleMove2 = true;
  titleMove2E = e.currentTarget;
});
$(document).on("mouseout", ".libraryTitle", (e) => {
  $(e.currentTarget).removeClass("moveTitle");
  titleMove2 = false;
  $(e.currentTarget).scrollLeft(0);
});
let titleMove;
let titleMove2;
let titleMove2E;
$(document).on("click", ".xi-plus-circle-o, .cancelButton", () => {
  if (betaMusic == true) {
    mc.musicList.pop();
    betaMusic = false;
  }
  setTimeout(() => {
    let innerString = "";
    for (let j in mc.musicList) {
      if (mc.musicList[j].display == true) {
        innerString += `<div class='playListItem playListList' style="display: none;" data-number="${j}"><div class="singerBG" style="background-image: url('./img/music_img/${mc.musicList[j].img}')"></div><div><p class='libraryTitle'>${mc.musicList[j].music_name}</p><p class="makerName">${mc.musicList[j].singer_name}</p></div></div>`;
      } else {
        innerString += `<div class='playListItem playListList' data-number="${j}"><div class="singerBG" style="background-image: url('./img/music_img/${mc.musicList[j].img}')"></div><div><p class='libraryTitle'>${mc.musicList[j].music_name}</p><p class="makerName">${mc.musicList[j].singer_name}</p></div></div>`;
      }
    }
    $(".library").html(innerString);
  }, 300);
});
$(document).on("click", ".playListList", () => {
  setTimeout(() => {
    audio.play();
  }, 300);
});
$(".xi-focus-frame").on("click", () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else if (document.exitFullscreen) {
    document.exitFullscreen();
  }
});
let shuffleOptionState = false;
$("#shuffleOption").on("click", () => {
  if (audio.loop == false) {
    if (shuffleOptionState) {
      shuffleOptionState = false;
      $("#shuffleOption").addClass("playBarFalse");
    } else {
      shuffleOptionState = true;
      $("#shuffleOption").removeClass("playBarFalse");
    }
  } else {
    $("#repeat").trigger("click");
    $("#shuffleOption").trigger("click");
  }
});
let betaMusic = false;
let betaMusicNumber;
let betaMusicMaxNumber;
$(document).on("click", ".music", (e) => {
  betaMusicNumber = $(e.currentTarget).index();
  betaMusicMaxNumber = $(".music").length;
  console.log(betaMusicMaxNumber);
  if (betaMusic == true) {
    mc.musicList.pop();
  }
  betaMusic = true;
  let musicInfo = {
    img: $(e.currentTarget).find(".playListItemImg").data("img"),
    music_name: $(e.currentTarget).find(".playListItemTitle").html(),
    singer_name: $(e.currentTarget).find(".playListSinger").html(),
    src: $(e.currentTarget).find(".playListItemImg").data("src"),
    display: true,
  };
  mc.musicList.push(musicInfo);
  mc.nowPlayNumber = mc.musicList.length - 1;
  mc.setNowPlayMusic = mc.musicList.length;
  audio.src = `../audio/${mc.musicList[mc.getNowPlayNumber]["src"]}`;
  audio.play();
});
