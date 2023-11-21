const audio = new Audio("");

class MusicController {
  constructor(
    music = null,
    musicTimeLength = null,
    musicList = [],
    nowPlayNumber = 0,
    nowPlayLengthVal = 0,
    playPause = false,
    musicLike = []
  ) {
    this.music = music;
    this.musicTimeLength = musicTimeLength;
    this.musicList = musicList;
    this.nowPlayNumber = nowPlayNumber;
    this.nowPlayLengthVal = nowPlayLengthVal;
    this.playPause = playPause;
    this.musicLike = musicLike;
  }
  set setPlayPause(val) {
    this.playPause = val;
  }
  set setNowPlayNumber(val) {
    if (
      this.musicList.length < val + 1 + this.musicTimeLength ||
      val + this.musicTimeLength < 0
    ) {
      this.nowPlayNumber = 0;
    } else {
      this.nowPlayNumber = val;
    }
  }
  get getNowPlayNumber() {
    return this.nowPlayNumber;
  }
  playPauseEvent() {
    $("#play").on("click", () => {
      if (this.playPause) {
        this.playPause = false;
        $("#play").removeClass("xi-pause");
        $("#play").addClass("xi-play");
        audio.pause();
      } else {
        this.playPause = true;
        $("#play").removeClass("xi-play");
        $("#play").addClass("xi-pause");
        audio.play();
      }
    });
  }
  playBarClick() {
    $("#rangeBar").on("click", () => {
      audio.currentTime = ($("#rangeBar").val() * audio.duration) / 10000;
    });
    $("#rangeBar").on("touchend", () => {
      audio.currentTime = ($("#rangeBar").val() * audio.duration) / 10000;
    });
  }
  playForward() {
    $("#forward").on("click", () => {
      if (betaMusic) {
        this.musicList.pop();
        if (betaMusicNumber < betaMusicMaxNumber - 1) {
          betaMusicNumber++;
          $(".music").eq(betaMusicNumber).trigger("click");
        } else {
          betaMusicNumber = 0;
          $(".music").eq(betaMusicNumber).trigger("click");
        }
      } else {
        let rememberNumber = this.getNowPlayNumber;
        rememberNumber++;
        this.setNowPlayNumber = rememberNumber;
        audio.src = `../audio/${this.musicList[this.getNowPlayNumber]["src"]}`;
        mc.setPlayPause = true;
        $("#play").removeClass("xi-play");
        $("#play").addClass("xi-pause");
        audio.play();
        setTimeout(() => {
          $(".backgroundColorSel")[0]?.scrollIntoView({
            behavior: "smooth",
            block: "end",
          });
        }, 400);
      }
    });
  }
  playBackward() {
    $("#backward").on("click", () => {
      if (betaMusic) {
        this.musicList.pop();
        if (betaMusicNumber > -1) {
          betaMusicNumber--;
          $(".music").eq(betaMusicNumber).trigger("click");
        } else {
          betaMusicNumber = betaMusicMaxNumber - 1;
          $(".music").eq(betaMusicNumber).trigger("click");
        }
      } else {
        let rememberNumber = this.getNowPlayNumber;
        rememberNumber--;
        this.setNowPlayNumber = rememberNumber;
        audio.src = `../audio/${this.musicList[this.getNowPlayNumber]["src"]}`;
        mc.setPlayPause = true;
        $("#play").removeClass("xi-play");
        $("#play").addClass("xi-pause");
        audio.play();
        setTimeout(() => {
          $(".backgroundColorSel")[0]?.scrollIntoView({
            behavior: "smooth",
            block: "end",
          });
        }, 400);
      }
    });
  }
  playLoop() {
    $("#repeat").on("click", () => {
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
  mutedSound() {
    $("#volume").on("click", () => {
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
  soundBarClick() {
    $("#sound").on("click", () => {
      audio.volume = $("#sound").val() / 100;
    });
  }
}
const mc = new MusicController();
mc.playPauseEvent();
mc.playBarClick();
mc.playForward();
mc.playBackward();
mc.playLoop();
mc.mutedSound();
mc.soundBarClick();
$(document).on("click", ".xi-plus-circle-o", (e) => {
  e.stopPropagation();
  let musicInfo = {
    img: $(e.currentTarget).parent("div").find(".playListItemImg").data("img"),
    music_name: $(e.currentTarget)
      .parent("div")
      .find(".playListItemTitle")
      .html(),
    singer_name: $(e.currentTarget)
      .parent("div")
      .find(".playListSinger")
      .html(),
    src: $(e.currentTarget).parent("div").find(".playListItemImg").data("src"),
  };
  let checkSame = false;
  for (let musicListItem of mc.musicList) {
    if (musicListItem.music_name == musicInfo.music_name) {
      checkSame = true;
      break;
    }
  }
  if (!checkSame) {
    mc.musicList.push(musicInfo);
    audio.src = `../audio/${mc.musicList[mc.getNowPlayNumber]["src"]}`;
  }
  console.log(musicInfo);
});
