/* WDI LAB 2.e - CEL-REN-SIUS-HEIT
Date: Nov. 18, 2014
Author: Ky Meyer-Choi

Instructions: 
Convert a temperature from F to C.

Convert it to fahrenheit and output "NN°C is NN°F".
*/

function ComputeTemperatures(temperature)
{
	var celsius = toCelsius(temperature);
	var fahrenheit = toFahrenheit(celsius);

	console.log(Math.round(celsius) + "°C is " +
		Math.round(fahrenheit) + "°F");
}

function toCelsius(F)
{
	return (F - 32) * 5 / 9;
}

function toFahrenheit(C)
{
	return C * 9 / 5 + 32;
}

var fahrenheit = 77;

ComputeTemperatures(fahrenheit);