var apiSID = require("./../.env").apiSID;
var apiToken = require("./../.env").apiToken;

Text = function(){
}

Text.prototype.getText = function(input) {
  var call = "https://api.twilio.com/2010-04-01/Accounts/ACca9625d5004aecd333d236abdf521852/Messages.json --data-urlencode 'To=+15039983176' --data-urlencode 'From=+19713402317' --data-urlencode 'Body=Taylor is a nice guy' -u ACca9625d5004aecd333d236abdf521852:c4e7a3fb6a522a073e18423a04ac181c"
  // var call = "https://api.twilio.com/2010-04-01/Accounts/" + apiSID + "/Messages.json" + " --data-urlencode 'To=+15039983176' --data-urlencode 'From=+19713402317'" + " --data-urlencode 'Body=Testing'" + " -u " + apiSID + ":" + apiToken;
  console.log(call);

  $.post(call).then(function(response) {
    $('#result').text("Your input was:" + input);
    console.log("it worked!");
    return response;
  }).fail(function(error) {
    $('#result').text(error.responseJSON.message);
    console.log("it didnt work");
  });
};

exports.textModule = Text;
var twilio = require('twilio');

var accountSid = 'ACca9625d5004aecd333d236abdf521852';
var authToken = 'c4e7a3fb6a522a073e18423a04ac181c';

var twilio = require('twilio');
var client = new twilio.RestClient(accountSid, authToken);

Text = function(){
}

Text.prototype.send = function(){
  console.log("working");
  client.messages.create({
    to: '+15039983176',
    from: '+19713402317',
    body: 'Hello from Alex'
  }, function(err, message) {
    console.log(message.sid);
  });
}

Text.prototype.test = function(){
  console.log("testing");
}

exports.textModule = Text;
