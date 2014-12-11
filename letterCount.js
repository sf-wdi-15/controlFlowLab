var letterCount = function (str) {
	var obj = {};
	for (var i = 0; i<str.length; i+=) {
		var letter = str[i];
			if (letter in object) {
				obj[letter] +=1;
			} else {
				obj[letter] = 1;
			}
	}
	return obj
}
console.log(letterCount('string string string'))