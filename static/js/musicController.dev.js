"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var audio = new Audio("");

var MusicController =
/*#__PURE__*/
function () {
  function MusicController() {
    var music = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
    var musicTimeLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
    var musicList = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : [];
    var nowPlayNumber = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    var nowPlayLengthVal = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : 0;
    var playPause = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : false;
    var musicLike = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : [];

    _classCallCheck(this, MusicController);

    this.music = music;
    this.musicTimeLength = musicTimeLength;
    this.musicList = musicList;
    this.nowPlayNumber = nowPlayNumber;
    this.nowPlayLengthVal = nowPlayLengthVal;
    this.playPause = playPause;
    this.musicLike = musicLike;
  }

  _createClass(MusicController, [{
    key: "playPauseEvent",
    value: function playPauseEvent() {
      var _this = this;

      $("#play").on("click", function () {
        if (_this.playPause) {
          _this.playPause = false;
          $("#play").removeClass("xi-pause");
          $("#play").addClass("xi-play");
          audio.pause();
        } else {
          _this.playPause = true;
          $("#play").removeClass("xi-play");
          $("#play").addClass("xi-pause");
          audio.play();
        }
      });
    }
  }, {
    key: "playBarClick",
    value: function playBarClick() {
      $("#rangeBar").on("click", function () {
        audio.currentTime = $("#rangeBar").val() * audio.duration / 10000;
      });
    }
  }, {
    key: "playForward",
    value: function playForward() {
      var _this2 = this;

      $("#forward").on("click", function () {
        if (betaMusic) {
          _this2.musicList.pop();

          betaMusic = false;
        }

        var rememberNumber = _this2.getNowPlayNumber;
        rememberNumber++;
        _this2.setNowPlayNumber = rememberNumber;
        audio.src = "../audio/".concat(_this2.musicList[_this2.getNowPlayNumber]["src"]);
        mc.setPlayPause = true;
        $("#play").removeClass("xi-play");
        $("#play").addClass("xi-pause");
        audio.play();
        setTimeout(function () {
          $(".backgroundColorSel")[0].scrollIntoView({
            behavior: "smooth",
            block: "end"
          });
          $(".backgroundColorSel")[1].scrollIntoView({
            behavior: "smooth",
            block: "end"
          });
          console.log($(".backgroundColorSel")[1]);
        }, 350);
      });
    }
  }, {
    key: "playBackward",
    value: function playBackward() {
      var _this3 = this;

      $("#backward").on("click", function () {
        if (betaMusic) {
          _this3.musicList.pop();

          betaMusic = false;
        }

        var rememberNumber = _this3.getNowPlayNumber;
        rememberNumber--;
        _this3.setNowPlayNumber = rememberNumber;
        audio.src = "../audio/".concat(_this3.musicList[_this3.getNowPlayNumber]["src"]);
        mc.setPlayPause = true;
        $("#play").removeClass("xi-play");
        $("#play").addClass("xi-pause");
        audio.play();
        setTimeout(function () {
          $(".backgroundColorSel")[0].scrollIntoView({
            behavior: "smooth",
            block: "end"
          });
        }, 350);
      });
    }
  }, {
    key: "playLoop",
    value: function playLoop() {
      $("#repeat").on("click", function () {
        if (!shuffleOptionState) {
          if (audio.loop) {
            audio.loop = false;
            $("#repeat").addClass("playBarFalse");
          } else {
            audio.loop = true;
            $("#repeat").removeClass("playBarFalse");
          }
        } else {
          $("#shuffleOption").trigger("click");
          $("#repeat").trigger("click");
        }
      });
    }
  }, {
    key: "mutedSound",
    value: function mutedSound() {
      $("#volume").on("click", function () {
        if (!audio.muted) {
          audio.muted = true;
          $("#volume").addClass("xi-volume-off");
          $("#volume").removeClass("xi-volume-up");
        } else {
          audio.muted = false;
          $("#volume").addClass("xi-volume-up");
          $("#volume").removeClass("xi-volume-off");
        }
      });
    }
  }, {
    key: "soundBarClick",
    value: function soundBarClick() {
      $("#sound").on("click", function () {
        audio.volume = $("#sound").val() / 100;
      });
    }
  }, {
    key: "setPlayPause",
    set: function set(val) {
      this.playPause = val;
    }
  }, {
    key: "setNowPlayNumber",
    set: function set(val) {
      if (this.musicList.length < val + 1 + this.musicTimeLength || val + this.musicTimeLength < 0) {
        this.nowPlayNumber = 0;
      } else {
        this.nowPlayNumber = val;
      }
    }
  }, {
    key: "getNowPlayNumber",
    get: function get() {
      return this.nowPlayNumber;
    }
  }]);

  return MusicController;
}();

var mc = new MusicController();
mc.playPauseEvent();
mc.playBarClick();
mc.playForward();
mc.playBackward();
mc.playLoop();
mc.mutedSound();
mc.soundBarClick();
$(document).on("click", ".xi-plus-circle-o", function (e) {
  e.stopPropagation();
  var musicInfo = {
    img: $(e.currentTarget).parent("div").find(".playListItemImg").data("img"),
    music_name: $(e.currentTarget).parent("div").find(".playListItemTitle").html(),
    singer_name: $(e.currentTarget).parent("div").find(".playListSinger").html(),
    src: $(e.currentTarget).parent("div").find(".playListItemImg").data("src")
  };
  var checkSame = false;
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = mc.musicList[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var musicListItem = _step.value;

      if (musicListItem.music_name == musicInfo.music_name) {
        checkSame = true;
        break;
      }
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

  if (!checkSame) {
    mc.musicList.push(musicInfo);
    audio.src = "../audio/".concat(mc.musicList[mc.getNowPlayNumber]["src"]);
  }

  console.log(musicInfo);
});