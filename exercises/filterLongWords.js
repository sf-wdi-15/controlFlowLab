//Hardcode an array of words. Have a variable maxLength, push words that are less than the maxLength into a new array, and console.log that.

var words = ['here', 'is', 'an', 'array', 'of', 'words'];
var maxLength = 2;
var longWords = [];

for (i = 0; i < words.length; i++){
  wordLength = words[i].length;

  if(wordLength > maxLength){
    longWords.push(words[i]);
  }
};

console.log(longWords);