var inputString = "building";
var reverseString = "";

for (i = inputString.length -1; i >= 0; i -= 1) {
	reverseString += inputString[i];
}

console.log(reverseString);

//---------------------

var inputStr = "planet";
var outputStr = "";

for (var index = 0; index < inputStr.length; index +=1) {
	outputStr = inputStr[index] + outputStr;
}


console.log(outputStr);

//----------

var inputStrArr = inputStr.split("");
for (var index = 0; index < inputStrArr.length/2; index +=1 ) {
	inputStrArr[index] = [inputStrArr[inputStrArr.length - index]]
}