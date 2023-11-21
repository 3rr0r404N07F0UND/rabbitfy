"use strict";

$("#login").on("click", function () {
  $("#hid").val($("#id").val());
  $("#hpw").val($("#pw").val());

  if ($("#id").val().length == 0 || $("#pw").val().length == 0) {
    $("p").css("visibility", "visible");
  } else {
    $.ajax({
      type: "POST",
      url: "/loginInfo",
      data: {
        id: $("#id").val(),
        pw: $("#pw").val()
      }
    }).done(function (data) {
      if (data == true) {
        $("#loginSuccess").trigger("click");
      } else {
        $("#modal").css("display", "block");
      }
    });
  }
});
$("#id").on("input", function () {
  if ($("#id").val().length > 16) {
    $("#id").val($("#id").val().replace(/.$/, ""));
  }

  var stringCache = $("#id").val();
  stringCache = stringCache.replace(/[^a-z0-9]/g, "");
  $("#id").val(stringCache);
});
$("#nope").on("click", function () {
  $("#modal").css("display", "none");
});
$("#pw").on("input", function () {
  if ($("#pw").val().length > 16) {
    $("#pw").val($("#pw").val().replace(/.$/, ""));
  }

  var stringCache = $("#pw").val();
  stringCache = stringCache.replace(/[^a-z0-9]/g, "");
  $("#pw").val(stringCache);
});
$("#introButton").on("click", function () {
  $("#introModal").css("display", "none");
});