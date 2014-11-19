var output = 85;

switch(true) {
	case (output >= 0 && output < 60):
		console.log("F");
		break;
	case (output > 59 && output < 70):
		console.log("D");
		break;
	case (output > 69 && output < 80):
	console.log("C");
		break;
	case (output > 79 && output < 90):
		console.log("B");
		break;
	case (output > 89 && output < 101):
	console.log("A");
		break;
}