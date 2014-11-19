var my_array = ["hat", "sock", "cat", "mark"];
var maxLength = 4;
var new_array = [];

for (var i = 0; i < my_array.length; i++) {
	if (my_array[i].length < maxLength) {
		new_array.push(my_array[i]);
	}

}
console.log(new_array);