var inputString = "building";
var reverseString = "";

for (i = inputString.length -1; i >= 0; i -= 1) {
	reverseString += inputString[i];
}

console.log(reverseString);