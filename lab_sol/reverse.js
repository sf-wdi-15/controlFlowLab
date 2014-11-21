var inputStr = "planet";
var outputStr = "";

// for (var index = 0; index < inputStr.length; index += 1) {
//   outputStr = inputStr[index] + outputStr;
// }

// console.log(outputStr);

// for (var index = inputStr.length - 1; index >= 0; index -= 1) {
//   outputStr = outputStr + inputStr[index];
// }

var inputStrArr = inputStr.split("");
for (var index = 0; index < inputStrArr.length/2; index+=1 ) {
  inputStrArr[index] = [inputStrArr[inputStrArr.length - 1 - index], inputStrArr[inputStrArr.length - index - 1] = inputStrArr[index]][0]
}

console.log(inputStrArr.join(""));