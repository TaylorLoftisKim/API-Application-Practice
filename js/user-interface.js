var Text = require("./../js/text.js").textModule;
 //FRONT END LOGIC

$(function() {
  var textObject = new Text();
  $("#userInput").click(function() {
    var input = $("#text").val();
    textObject.test();
    textObject.send();
  });
});
