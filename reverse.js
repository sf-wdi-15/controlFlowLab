/* WDI LAB 2.a - STRING REVERSAL
Date: Nov. 18, 2014
Author: Ky Meyer-Choi

Instructions:
	Write a program that will take a hardcoded string, 
	and console log the reversed version of it. Use a for loop

	var inputString = "building"
*/    

var inputString = "racecar";
var reversedString = "";

console.log("Hardcoded String: " + inputString);

for (var index = inputString.length-1; index >= 0; index -= 1)
{
	reversedString += inputString[index];
}

console.log("Reversed String: " + reversedString);
