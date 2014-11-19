/* WDI LAB 2.b - LENGTH MATTERS 
Date: Nov. 18, 2014
Author: Ky Meyer-Choi

Instructions: 
	Hardcode an array of words. Have a variable maxLength, 
	push words that are less than the maxLength into a 
	new array, and console.log that.
*/


var words = ["Hardcode", "an", "array", "of", "words", 
	"superduperduperlongword", "four", "five", "seven"];
var filteredWords = [];
var maxLength = 7;

for (var index = 0; index < words.length; index +=1) {
	if (words[index].length < maxLength) {
		filteredWords.push(words[index]);
	}
}

console.log("Max Length: ", maxLength + "\n");
console.log("Word List: " + words.toString() + "\n");
console.log("Filtered Word List: " + filteredWords.toString() + "\n");
