var words = ["how", "to", "filter", "an", "array", "by", "wordlength"]
var maxLength = 5;
var newWords = [];

for (i = 0; i < words.length; i += 1) {
      if (words[i].length < maxLength) {
      	newWords.push(words[i]);
      } 

}
console.log(newWords)





