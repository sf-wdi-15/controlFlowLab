var myArray = ["hat", "sock", "cat", "mark"];
var maxLength = 4;
var newArray = [];

for(var i=0; i<myArray.length; i+=1){
if(myArray[i].length < maxLength)	{
newArray.push(myArray[i]);
}
}
console.log(newArray);