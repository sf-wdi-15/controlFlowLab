/* WDI LAB 2.d - KNOW YOUR GRAMMAR
Date: Nov. 18, 2014
Author: Ky Meyer-Choi

Instructions: 
	Take an input like

		thing = "cat"
		count = "5"

	and output the pluralized form of the word like "5 cats" or "1 dog"
*/

var thing = "baboon";
var count = 1;

if (count <= 0)
{
	console.log("No baboons shall be found today.");
}

else if (count === 1)
{
	console.log("There is only room for " + count + " " + thing +
		" in this town!");
}
else
{
	console.log("Currently, there are " + count + " " + thing + 
		"s at this reserve.");
}