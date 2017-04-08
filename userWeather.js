// Here we include the weather-js 
// so we can use it in the calling application for the user

var weather = require("weather-js");

module.exports.userWeather = function userWeather(location) {

weather.find({ search: location, degreeType: "F" }, 
	function(err, result) {

// Anchorage, AK for example

  // If there is an error log it.
  if (err) {
    console.log('Error in gathering data via weather-js');
    console.log(err);
  }

// this gives a JSON object as its response... not a JSON string
// But to get a nice lising we need to stringify

  // If there is no error... then print out the weather data.
  // We use JSON.stringify to print the data in string format.
  // We use the JSON.stringify argument of "2" to make the format pretty.
  // See link here: http://stackoverflow.com/questions/4810841/how-can-i-pretty-print-json-using-javascript
  console.log(JSON.stringify(result, null, 2));

});


}