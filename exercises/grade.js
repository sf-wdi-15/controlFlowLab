//Output the following letter grade from a variable with with a test score. Display either "A", "B", "C", "D", or "F", for an score that is an integer between 0 and 100. Try and use a switch statement.
var testScore = 10;

if (testScore > 90){
  console.log('A');
} else if (testScore < 90 && testScore >= 80){
  console.log('B');
} else if (testScore < 80 && testScore >= 70){
  console.log('B');
} else if (testScore < 70 && testScore >= 60){
  console.log('B');
} else if (testScore < 60 && testScore >= 50){
  console.log('B'); 
} else {
  console.log('F');
}