var data = require("./products.json")

// Write your solutions below
console.log(data["items"].length)

for (var i = 0; i < data["items"].length; i++) {
	var object = data["items"][i] ["product"] ["inventories"];
	console.log(object) 
};
