/* 
Output the following letter
  grade from a variable with 
  with a test score. Display 
  either "A", "B", "C", "D", 
  or "F", for an score that
  is an integer between 0 and 
  100. Try and use a `switch`
  statement.
*/

var score = 72;
var grade = Math.floor(score / 10);

switch(grade) {
	case 10:
		console.log("A");
		break;
	case 9:
		consoloe.log("A");
		break;
	case 8:
		console.log("B");
		break;
	case 7:
		console.log("C");
		break;
	case 6:
		console.log("D");
		break;
	default:
		console.log("F");
	}
