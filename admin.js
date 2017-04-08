// admin user stuff reads the log file 
// and reports it to the log file
module.exports.listLog = function listLog () {

fs = require('fs');

fs.readFile('log.txt', 'utf8', function(err, data) {
  if (err) {
  	console.log(err.message);
  	return
  } 
  else {
  	console.log('log.txt file data:');
  	console.log(data);
  }

});

};