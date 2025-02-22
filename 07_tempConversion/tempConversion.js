const convertToCelsius = function(degreesInF) {
  let celsius = (parseFloat(degreesInF) - 32) * 5 / 9;
  celsius = parseFloat(celsius.toFixed(1));
  return celsius;
};

const convertToFahrenheit = function(degreesInC) {
  let fahrenheit = degreesInC * 9 / 5 + 32;
  fahrenheit = parseFloat(fahrenheit.toFixed(1));
  return fahrenheit;
};

convertToCelsius(32);

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
