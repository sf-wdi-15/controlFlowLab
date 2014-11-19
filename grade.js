var grade = 78

switch (true) {
	case (grade >= 0 && grade <= 59):
		console.log("F");
		break;
	case (grade >= 60 && grade <= 69):
		console.log("D");
		break;
	case (grade >= 70 && grade <= 79):
		console.log("C");
		break;
	case (grade >= 80 && grade <= 89):
		console.log("B");
		break;
	case (grade >= 90 && grade <= 100):
		console.log("A");
	}