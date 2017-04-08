// main program for the application with user/weather request/admin 

var admin = require('./admin');
var user = require('./user');

// Here we include the weather-js so we can use 
// it in our Node application.

// echo back the command line
console.log(process.argv);

// assume initial argument is admin or user
if (process.argv[2] === 'admin') {
  	// process the admin request
  	console.log('this is an admin person');
  	admin.listLog();
};

if (process.argv[2] === 'user') {
  	// process the user request
  	console.log('this is a user person');
  	user.newUser();
};


















