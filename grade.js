/* WDI LAB 2.c - A GRADE FOR A SCORE
Date: Nov. 18, 2014
Author: Ky Meyer-Choi

Instructions: 
	Output the following letter grade from a variable with with a test score. 
	Display either "A", "B", "C", "D", or "F", for an score that is an 
	integer between 0 and 100. Try and use a switch statement.
*/

var testScore = 60;
var grade = "";
var validInput = true;

switch (true)
{
	case testScore <= 100 && testScore >= 90:
	grade = "A";
	break;
	case testScore <= 89 && testScore >= 80:
	grade = "B";
	break;
	case testScore <= 79 && testScore >=70:
	grade = "C";
	break;
	case testScore <= 69 && testScore >=60:
	grade = "D";
	break;
	case testScore <= 59 && testScore >= 0:
	grade = "F";
	break;
	default:
	validInput = false;
	break;
}

if (validInput)
	console.log("Test Score: ", testScore, "\nGrade: ", grade);
else
	console.log("Cannot compute. Test score is not between 0-100.");
