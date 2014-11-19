function convert(f) {
	f = (f - 32)/(1.8);
	console.log(f);
	var c = f;
	console.log("" + f + "°F" + " is " + c + "°C");
}

convert(80)
