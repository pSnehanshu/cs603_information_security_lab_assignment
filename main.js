const $ = require("jquery");
const ceaser = require("./ceaser");
const playfair = require("crypto-classic-playfair");

$(function () {
  $("#ceaser_form").submit(function (e) {
    e.preventDefault();
    var text = $("#ceaser_text").val();
    var key = parseInt($("#ceaser_key").val());
    var ceaser_result = ceaser(text, key);
    $("#ceaser_result").text(ceaser_result);
  });

  $("#pf_enc_btn").click(function (e) {
    e.preventDefault();
    var text = $("#pf_text").val();
    var key = $("#pf_key").val();
    var pf_result = playfair.encipher(text, key);
    $("#pf_enctxt").val(pf_result);
  });

  $("#pf_denc_btn").click(function (e) {
    e.preventDefault();
    var text = $("#pf_enctxt").val();
    var key = $("#pf_key").val();
    var pf_result = playfair.decipher(text, key);
    $("#pf_text").val(pf_result);
  });
});
