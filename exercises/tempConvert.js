/* Convert a temperature from F to C.
   Convert it to fahrenheit and output "NN°C is NN°F".
*/

var tempF = prompt(); 
var tempC = 0;

function convertCelsius(tempF){
  tempC = (tempF - 32) * .5556;
  return tempC;
}

convertCelsius(tempF);

console.log(tempC + " °C is " + tempF + " °F");