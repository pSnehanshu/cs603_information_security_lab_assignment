const $ = require("jquery");
const ceaser = require("./ceaser");

$(function () {
  $("#ceaser_form").submit(function (e) {
    e.preventDefault();
    var text = $("#ceaser_text").val();
    var key = parseInt($("#ceaser_key").val());
    var ceaser_result = ceaser(text, key);
    $("#ceaser_result").text(ceaser_result);
  });
});
