"use strict";

var defaultMainPage = $("#mainItem").html();
console.log(defaultMainPage);
$("#searchBar").on("input", function () {
  $.ajax({
    type: "GET",
    url: "/playListSearch",
    data: {
      searchString: $("#searchBar").val()
    }
  }).done(function (data) {
    console.log("data: ".concat(data));
    var ajaxString = "<div class='overflowScroll'><div class='playList'>";
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var value = _step.value;
        console.log(value.img);
        ajaxString += "<div class=\"playListItem music\"><div class=\"playListItemImg\" data-src=\"".concat(value.music_src, "\" data-img=\"").concat(value.img, "\" style=\"background-image: url('./img/music_img/").concat(value.img, "')\"></div><div class=\"playListItemTitle\">").concat(value.music_name, "</div><div class=\"playListSinger\">").concat(value.singer_name, "</div><i class=\"xi-plus-circle-o\"></i></div>");
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }

    ajaxString += "</div></div>";
    $("#mainItem").html(ajaxString);
  });
});
$("#home").on("click", function () {
  $("#mainItem").html(defaultMainPage);
  $(".navSelect > p").removeClass("selectClick");
  $("#home").addClass("selectClick");
});
$("#search").on("click", function () {
  $.ajax({
    type: "GET",
    url: "/playListSearch",
    data: {
      searchString: ""
    }
  }).done(function (data) {
    console.log("data: ".concat(data));
    var ajaxString = "<div class='overflowScroll'><div class='playList'>";
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = data[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var value = _step2.value;
        console.log(value.img);
        ajaxString += "<div class=\"playListItem music\"><div class=\"playListItemImg\" data-src=\"".concat(value.music_src, "\" data-img=\"").concat(value.img, "\" style=\"background-image: url('./img/music_img/").concat(value.img, "')\"></div><div class=\"playListItemTitle\">").concat(value.music_name, "</div><div class=\"playListSinger\">").concat(value.singer_name, "</div><i class=\"xi-plus-circle-o\"></i></div>");
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
          _iterator2["return"]();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }

    ajaxString += "</div></div>";
    preEvent = ajaxString;
    $("#mainItem").html(ajaxString);
  });
  $(".navSelect > p").removeClass("selectClick");
  $("#search").addClass("selectClick");
});
$("#library").on("click", function () {
  $.ajax({
    type: "GET",
    url: "/playListLibrary"
  }).done(function (data) {
    console.log("data: ".concat(data));
    var ajaxString = "<div class='overflowScroll'><div class='playList'>";
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      for (var _iterator3 = data[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var value = _step3.value;
        console.log(value.img);
        ajaxString += "<div class=\"playListItem libraryItem\"><div class=\"playListItemImg\" style=\"background-image: url('./img/library_img/".concat(value.img_src, "')\"></div><div class=\"playListItemTitle\">").concat(value.library_name, "</div><div class=\"playListSinger\">").concat(value.maker_name, "</div></div>");
      }
    } catch (err) {
      _didIteratorError3 = true;
      _iteratorError3 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
          _iterator3["return"]();
        }
      } finally {
        if (_didIteratorError3) {
          throw _iteratorError3;
        }
      }
    }

    ajaxString += "</div></div>";
    preEvent = ajaxString;
    $("#mainItem").html(ajaxString);
  });
  $(".navSelect > p").removeClass("selectClick");
  $("#library").addClass("selectClick");
});
$("#playListLibrary").on("click", function () {
  var innerString = "<div class='overflowScroll'><div class='playList margin-left10'><h3>PlayList</h3>";

  for (var j in mc.musicList) {
    console.log(j);

    if (mc.musicList[j].display == true) {
      innerString += "<div class=\"playListItem playListList playListListLibrary\" data-number=\"".concat(j, "\" style=\"display: none;\"><div class=\"playListItemImg\" style=\"background-image: url('./img/music_img/").concat(mc.musicList[j].img, "')\"></div><div class=\"playListItemTitle\">").concat(mc.musicList[j].music_name, "</div><div class=\"playListSinger\">").concat(mc.musicList[j].singer_name, "</div><div class=\"xi-close-circle-o cancelButton\"></div></div>");
    } else {
      innerString += "<div class=\"playListItem playListList playListListLibrary\" data-number=\"".concat(j, "\"><div class=\"playListItemImg\" style=\"background-image: url('./img/music_img/").concat(mc.musicList[j].img, "')\"></div><div class=\"playListItemTitle\">").concat(mc.musicList[j].music_name, "</div><div class=\"playListSinger\">").concat(mc.musicList[j].singer_name, "</div><div class=\"xi-close-circle-o cancelButton\"></div></div>");
    }
  }

  innerString += "</div></div>";
  preEvent = innerString;
  $("#mainItem").html(innerString); //innerString = "";
  //for (let j in mc.musicList) {
  //  innerString += `<div class='playListItem playListList' data-number="${j}"><div></div><div><p class='libraryTitle'>${mc.musicList[j].music_name}</p><p class="makerName">${mc.musicList[j].singer_name}</p></div></div>`;
  //}
  //$(".library").html(innerString);
});
$(document).on("click", ".artist", function (e) {
  $.ajax({
    type: "GET",
    url: "/artistLibrary",
    data: {
      searchString: $(e.currentTarget).children("p").html()
    }
  }).done(function (data) {
    var innerString = "<div class='overflowScroll'><div class='playList'>";
    var _iteratorNormalCompletion4 = true;
    var _didIteratorError4 = false;
    var _iteratorError4 = undefined;

    try {
      for (var _iterator4 = data[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
        var value = _step4.value;
        innerString += "<div class=\"playListItem music\"><div class=\"playListItemImg\" data-src=\"".concat(value.music_src, "\" data-img=\"").concat(value.img, "\" style=\"background-image: url('./img/music_img/").concat(value.img, "')\"></div><div class=\"playListItemTitle\">").concat(value.music_name, "</div><div class=\"playListSinger\">").concat(value.singer_name, "</div><i class=\"xi-plus-circle-o\"></i></div>");
      }
    } catch (err) {
      _didIteratorError4 = true;
      _iteratorError4 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion4 && _iterator4["return"] != null) {
          _iterator4["return"]();
        }
      } finally {
        if (_didIteratorError4) {
          throw _iteratorError4;
        }
      }
    }

    innerString += "</div></div>";
    preEvent = innerString;
    $("#mainItem").html(innerString);
  });
});
$(document).on("click", ".dailyMix", function (e) {
  $.ajax({
    type: "GET",
    url: "/dailyMix",
    data: {
      dailyMixTitle: $(e.currentTarget).children(".mainP").html()
    }
  }).done(function (data) {
    var innerString = "<div class='overflowScroll'><div class='playList'>";
    var _iteratorNormalCompletion5 = true;
    var _didIteratorError5 = false;
    var _iteratorError5 = undefined;

    try {
      for (var _iterator5 = data[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
        var value = _step5.value;
        innerString += "<div class=\"playListItem music\"><div class=\"playListItemImg\" data-src=\"".concat(value.music_src, "\" data-img=\"").concat(value.img, "\" style=\"background-image: url('./img/music_img/").concat(value.img, "')\"></div><div class=\"playListItemTitle\">").concat(value.music_name, "</div><div class=\"playListSinger\">").concat(value.singer_name, "</div><i class=\"xi-plus-circle-o\"></i></div>");
      }
    } catch (err) {
      _didIteratorError5 = true;
      _iteratorError5 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion5 && _iterator5["return"] != null) {
          _iterator5["return"]();
        }
      } finally {
        if (_didIteratorError5) {
          throw _iteratorError5;
        }
      }
    }

    innerString += "</div></div>";
    preEvent = innerString;
    $("#mainItem").html(innerString);
  });
});
$(document).on("click", ".album", function (e) {
  $.ajax({
    type: "GET",
    url: "/albumSearch",
    data: {
      albumTitle: $(e.currentTarget).children(".mainP").html()
    }
  }).done(function (data) {
    var innerString = "<div class='overflowScroll'><div class='playList'>";
    var _iteratorNormalCompletion6 = true;
    var _didIteratorError6 = false;
    var _iteratorError6 = undefined;

    try {
      for (var _iterator6 = data[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
        var value = _step6.value;
        innerString += "<div class=\"playListItem music\"><div class=\"playListItemImg\" data-src=\"".concat(value.music_src, "\" data-img=\"").concat(value.img, "\" style=\"background-image: url('./img/music_img/").concat(value.img, "')\"></div><div class=\"playListItemTitle\">").concat(value.music_name, "</div><div class=\"playListSinger\">").concat(value.singer_name, "</div><i class=\"xi-plus-circle-o\"></i></div>");
      }
    } catch (err) {
      _didIteratorError6 = true;
      _iteratorError6 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion6 && _iterator6["return"] != null) {
          _iterator6["return"]();
        }
      } finally {
        if (_didIteratorError6) {
          throw _iteratorError6;
        }
      }
    }

    innerString += "</div></div>";
    preEvent = innerString;
    $("#mainItem").html(innerString);
  });
});
$(".library > div").on("click", function (e) {
  $.ajax({
    type: "GET",
    url: "/librarySearch",
    xhrFields: {
      withCredentials: true
    },
    data: {
      libraryTitle: $(e.currentTarget).find(".libraryTitle").html()
    }
  }).done(function (data) {
    console.log(data);
    var innerString = "<div class='overflowScroll'><div class='playList'>";
    var _iteratorNormalCompletion7 = true;
    var _didIteratorError7 = false;
    var _iteratorError7 = undefined;

    try {
      for (var _iterator7 = data.dbData[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
        var value = _step7.value;

        if (data.yours) {
          innerString += "<div class=\"playListItem music\"><div class=\"playListItemImg\" data-src=\"".concat(value.music_src, "\" data-img=\"").concat(value.img, "\" style=\"background-image: url('./img/music_img/").concat(value.img, "')\"></div><div class=\"playListItemTitle\">").concat(value.music_name, "</div><div class=\"playListSinger\">").concat(value.singer_name, "</div><i class=\"xi-close-square-o libraryClose\"></i></div>");
        } else {
          innerString += "<div class=\"playListItem music\"><div class=\"playListItemImg\" data-src=\"".concat(value.music_src, "\" data-img=\"").concat(value.img, "\" style=\"background-image: url('./img/music_img/").concat(value.img, "')\"></div><div class=\"playListItemTitle\">").concat(value.music_name, "</div><div class=\"playListSinger\">").concat(value.singer_name, "</div></div>");
        }
      }
    } catch (err) {
      _didIteratorError7 = true;
      _iteratorError7 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion7 && _iterator7["return"] != null) {
          _iterator7["return"]();
        }
      } finally {
        if (_didIteratorError7) {
          throw _iteratorError7;
        }
      }
    }

    innerString += "</div></div>";
    preEvent = innerString;
    $("#mainItem").html(innerString);
  });
});
$(document).on("click", ".libraryItem", function (e) {
  $.ajax({
    type: "GET",
    url: "/librarySearch",
    xhrFields: {
      withCredentials: true
    },
    data: {
      libraryTitle: $(e.currentTarget).find(".playListItemTitle").html()
    }
  }).done(function (data) {
    var innerString = "<div class='overflowScroll'><div class='playList'>";
    var _iteratorNormalCompletion8 = true;
    var _didIteratorError8 = false;
    var _iteratorError8 = undefined;

    try {
      for (var _iterator8 = data.dbData[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
        var value = _step8.value;

        if (data.yours) {
          innerString += "<div class=\"playListItem music\"><div class=\"playListItemImg\" data-src=\"".concat(value.music_src, "\" data-img=\"").concat(value.img, "\" style=\"background-image: url('./img/music_img/").concat(value.img, "')\"></div><div class=\"playListItemTitle\">").concat(value.music_name, "</div><div class=\"playListSinger\">").concat(value.singer_name, "</div><i class=\"xi-close-square-o libraryClose\"></i></div>");
        } else {
          innerString += "<div class=\"playListItem music\"><div class=\"playListItemImg\" data-src=\"".concat(value.music_src, "\" data-img=\"").concat(value.img, "\" style=\"background-image: url('./img/music_img/").concat(value.img, "')\"></div><div class=\"playListItemTitle\">").concat(value.music_name, "</div><div class=\"playListSinger\">").concat(value.singer_name, "</div></div>");
        }
      }
    } catch (err) {
      _didIteratorError8 = true;
      _iteratorError8 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion8 && _iterator8["return"] != null) {
          _iterator8["return"]();
        }
      } finally {
        if (_didIteratorError8) {
          throw _iteratorError8;
        }
      }
    }

    innerString += "</div></div>";
    preEvent = innerString;
    $("#mainItem").html(innerString);
  });
});
$(document).on("click", ".playListList", function (e) {
  audio.src = "../audio/".concat(mc.musicList[$(e.currentTarget).data("number")]["src"]);
  mc.setNowPlayNumber = $(e.currentTarget).data("number");
  setTimeout(function () {
    $(".backgroundColorSel")[0].scrollIntoView({
      behavior: "smooth",
      block: "end"
    });
  }, 350);
});
$(document).on("click", ".cancelButton", function (e) {
  e.stopPropagation();

  if (betaMusic) {
    mc.musicList.pop();
    betaMusic = false;
  }

  mc.musicList.splice(Number($(e.currentTarget).parent(".playListList").data("number")), 1);
  $("#playListLibrary").trigger("click");
});
$("h1").on("click", function () {
  $("#mainItem").html(defaultMainPage);
});
$(".xi-angle-left").on("click", function () {
  $("#mainItem").html(defaultMainPage);
  $(".xi-angle-right").removeClass("selectClick");
});
$(".xi-angle-right").on("click", function () {
  $("#mainItem").html(preEvent);
  $(".xi-angle-right").addClass("selectClick");
});
$(document).on("click", "#playListLibrary", function () {
  $("#playListLibrary").addClass("clickScale");
  setTimeout(function () {
    $("#playListLibrary").removeClass("clickScale");
  }, 500);
});
var preEvent;
$(document).on("click", ".libraryClose", function (e) {
  e.stopPropagation();
  console.log($(e.currentTarget).siblings(".playListItemTitle").html());
  $.ajax({
    type: "delete",
    url: "/libraryDelete",
    xhrFields: {
      withCredentials: true
    },
    data: {
      title: $(e.currentTarget).siblings(".playListItemTitle").html()
    }
  }).done(function () {
    $(".libraryTitle").filter(function (i, v) {
      return $(v).text() === $(".userName").html();
    }).trigger("click");
  });
}); // $(document).on("click", ".xi-plus-circle-o", (e) => {
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

$(".userIcon").on("click", function () {
  location.href = "/choosePhoto";
});
$(".musicTitle").on("mouseenter", function () {
  titleMove = true;
});
$(".musicTitle").on("mouseout", function () {
  titleMove = false;
  $(".musicTitle").scrollLeft(0);
});
var titleMove;
$(document).on("click", ".xi-plus-circle-o, .cancelButton", function () {
  if (betaMusic == true) {
    mc.musicList.pop();
    betaMusic = false;
  }

  setTimeout(function () {
    var innerString = "";

    for (var j in mc.musicList) {
      if (mc.musicList[j].display == true) {
        innerString += "<div class='playListItem playListList' style=\"display: none;\" data-number=\"".concat(j, "\"><div class=\"singerBG\" style=\"background-image: url('./img/music_img/").concat(mc.musicList[j].img, "')\"></div><div><p class='libraryTitle'>").concat(mc.musicList[j].music_name, "</p><p class=\"makerName\">").concat(mc.musicList[j].singer_name, "</p></div></div>");
      } else {
        innerString += "<div class='playListItem playListList' data-number=\"".concat(j, "\"><div class=\"singerBG\" style=\"background-image: url('./img/music_img/").concat(mc.musicList[j].img, "')\"></div><div><p class='libraryTitle'>").concat(mc.musicList[j].music_name, "</p><p class=\"makerName\">").concat(mc.musicList[j].singer_name, "</p></div></div>");
      }
    }

    $(".library").html(innerString);
  }, 300);
});
$(document).on("click", ".playListList", function () {
  setTimeout(function () {
    audio.play();
  }, 300);
});
$(".xi-focus-frame").on("click", function () {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
  } else if (document.exitFullscreen) {
    document.exitFullscreen();
  }
});
var shuffleOptionState = false;
$("#shuffleOption").on("click", function () {
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
var betaMusic = false;
$(document).on("click", ".music", function (e) {
  if (betaMusic == true) {
    mc.musicList.pop();
  }

  betaMusic = true;
  var musicInfo = {
    img: $(e.currentTarget).find(".playListItemImg").data("img"),
    music_name: $(e.currentTarget).find(".playListItemTitle").html(),
    singer_name: $(e.currentTarget).find(".playListSinger").html(),
    src: $(e.currentTarget).find(".playListItemImg").data("src"),
    display: true
  };
  mc.musicList.push(musicInfo);
  mc.nowPlayNumber = mc.musicList.length - 1;
  mc.setNowPlayMusic = mc.musicList.length;
  audio.src = "../audio/".concat(mc.musicList[mc.getNowPlayNumber]["src"]);
  audio.play();
});