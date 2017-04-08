// process stuff for user
  var userWeather = require('./userWeather.js'); 
  fs = require('fs');

module.exports.newUser = function newUser () {

  var user = process.argv[3];
  var location = process.argv[4];

// process the admin request
  console.log('this is a user person');
  console.log()
  userWeather.userWeather(location);

  var currentDate = new Date();
  var currentTime = currentDate.getTime(); 

  // write to the log file... user name 
  var dataToLog = '\ncreate new user: ' + user;
  dataToLog = dataToLog + ' location: ' + location;
  dataToLog = dataToLog + ' timestamp: ' + currentTime.toString();

  fs.appendFile('log.txt', dataToLog, function (err) {
    if (err) throw err;
    console.log('Saved!');
  });

};

