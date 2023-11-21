"use strict";

$("output").on("click", function (e) {
  console.log("hi");
  $("#imgSrc").val($(e.currentTarget).data("src"));
  $("#submitButton").trigger("click");
});