/*  Hardcode an array of words. 
  Have a variable maxLength, 
  push words that are less 
  than the maxLength into a 
  new array, and console.log 
  that.
*/

var myArray = ["dog", "cat", "mouse", "horse", "eagle", "elephant"];
var maxLength = 4;
var newArray = [];
var currentWord;

for (var i = 0; i < myArray.length; i++) {
	currentWord = myArray[i];

	if (currentWord.length < maxLength) {
		newArray.push(currentWord);
	}
}

console.log("The new array is " + newArray);