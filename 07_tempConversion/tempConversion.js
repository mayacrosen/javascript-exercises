const convertToCelsius = function(fahreneit) {
  let cTemp = (fahreneit - 32) * 5 / 9;
  return (Math.round(10 * cTemp) / 10);
};

const convertToFahrenheit = function(celcius) {
  let fTemp = (celcius * 9 / 5) + 32;
  return ((Math.round(10 * fTemp)) / 10);
};

console.log(convertToCelsius(100));

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
