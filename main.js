const $ = require("jquery");
const ceaser = require("./ceaser");
const playfair = require("crypto-classic-playfair");
const des = require("des.js");

/* var enc = des.DES.create({
  type: "encrypt",
  key: new Buffer("0000000000000000", "hex"),
});

let e = new Buffer(enc.update("hello").concat(enc.final()));
console.log(new Buffer(e.toJSON()));
 */
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

  $("#des_enc_btn").click(function (e) {
    try {
      e.preventDefault();
      var text = $("#des_enctxt").val();
      var key = new Buffer($("#des_key").val(), "hex");
      var enc = des.DES.create({
        type: "encrypt",
        key: key,
      });
      window.encrypted = new Buffer(enc.update(text).concat(enc.final()));
      $("#des_enctxt").val(JSON.stringify(window.encrypted.toJSON(), null, 2));
    } catch (error) {
      alert(error.message);
    }
  });

  $("#des_denc_btn").click(function (e) {
    try {
      e.preventDefault();
      var key = new Buffer($("#des_key").val(), "hex");
      var dec = des.DES.create({
        type: "decrypt",
        key: key,
      });
      var decrypted = new Buffer(
        dec.update(window.encrypted).concat(dec.final())
      );
      console.log('enc', window.encrypted);
      console.log(decrypted);
    } catch (error) {
      alert(error.message);
    }
  });
});
