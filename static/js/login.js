$("#login").on("click", () => {
  $("#hid").val($("#id").val());
  $("#hpw").val($("#pw").val());
  if ($("#id").val().length == 0 || $("#pw").val().length == 0) {
    $("p").css("visibility", "visible");
  } else {
    $.ajax({
      type: "POST",
      url: "/loginInfo",
      data: { id: $("#id").val(), pw: $("#pw").val() },
    }).done((data) => {
      if (data == true) {
        $("#loginSuccess").trigger("click");
      } else {
        $("#modal").css("display", "block");
      }
    });
  }
});
$("#id").on("input", () => {
  if ($("#id").val().length > 16) {
    $("#id").val($("#id").val().replace(/.$/, ""));
  }
  let stringCache = $("#id").val();
  stringCache = stringCache.replace(/[^a-z0-9]/g, "");
  $("#id").val(stringCache);
});
$("#nope").on("click", () => {
  $("#modal").css("display", "none");
});
$("#pw").on("input", () => {
  if ($("#pw").val().length > 16) {
    $("#pw").val($("#pw").val().replace(/.$/, ""));
  }
  let stringCache = $("#pw").val();
  stringCache = stringCache.replace(/[^a-z0-9]/g, "");
  $("#pw").val(stringCache);
});
$("#introButton").on("click", () => {
  $("#introModal").css("display", "none");
});
