var my_array = ["four", "words", "in", "array"]
var max_length = 4;
new_array = [];

for (var i = 0; i < my_array.length; i = i +1) {
	if (my_array[i].length < max_length) {
		new_array.push(my_array[i]);
	
	}
}
console.log(new_array);