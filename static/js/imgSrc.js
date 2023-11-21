$("output").on("click", (e) => {
  console.log("hi");
  $("#imgSrc").val($(e.currentTarget).data("src"));
  $("#submitButton").trigger("click");
});
