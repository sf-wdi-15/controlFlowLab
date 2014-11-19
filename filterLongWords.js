var myArray = ["Jimmy", "dog", "Karen", "human"];
var maxLength = 4;
newArray = [];

for (var i = 0; i < myArray.length; i = i + 1) {
	if (myArray[i].length < maxLength) {
		newArray.push(myArray[i]);
	} else {
		console.log("");
	}
}
console.log(newArray)