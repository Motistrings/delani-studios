$(document).ready(function () {
  $(".design-icon").click(function () {
    $(".design-icon").hide(1200);
    $("#design").slideToggle("slow");
  });
  $("#design").click(function () {
    $("#design").hide(1200);
    $(".design-icon").slideToggle("slow");
    $(".design-icon").show();
  });

  $(".dev-icon").click(function () {
    $(".dev-icon").hide(1200);
    $("#develop").slideToggle("slow");
  });
  $("#develop").click(function () {
    $("#develop").hide(1200);
    $(".dev-icon").slideToggle("slow");
  });

  $(".prod-icon").click(function () {
    $(".prod-icon").hide(1200);
    $("#product").slideToggle("slow");
  });
  $("#product").click(function () {
    $("#product").hide(1200);
    $(".prod-icon").slideToggle("slow");
  });
});
