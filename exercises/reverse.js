//Write a program that will take a hardcoded string, and console log the reversed version of it. 
//Use a for loop

var inputString = "?emosewA si olegnA"

for( i = 0; i < inputString.length; i++){
  console.log(inputString.split('').reverse(i).join(''));
};


//homework review (solution 1 - )
  // add letter one at a time; order of perations matter, 
  // as the str will be added to left of outputStr in ex below

var inputStr = "plant"
var outputStr = ""

for (var index = 0; index < inputStr.length; index += 1){
  outputStr = inputStr[index] + outputStr;
};

    // 1 output = "p" + ""
    // 2 output = "l" + "p"
    // 3 output = "a" + "lp"
    // 4 output = "n" + "alp"
    // 5 output = "e" + "nalp"
    // 6 output = "t" + "enalp"

//homework review (solution 2 - start in reverse order)
for (var index = inputStr.length - 1; index >= 0; index -= 1) {
  outputStr = outputStr + inputStr[index];
  // outputStr += inputstr[index];
};

//homework review (solution 3 - )
var inputStr = inputStr.split("");
for ( var index = 0; indx < inputStrArr.length/2; index += 1)

