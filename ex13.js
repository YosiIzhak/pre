const input = require(`readline-sync`);

var sent = [];


 sent = input.question("please enter a string.. " );

let x = findLongestWord(sent);

 function findLongestWord(str) {
    var strSplit = str.split(' ');
    var longestWord = " ";
    for(var i = 0; i < strSplit.length; i++){
      if(strSplit[i].length > longestWord.length){
       if(!/[0-9]/.test(strSplit[i])
       && !/[$-/:-?{-~!"^@_`\[\]]/.test(strSplit[i])){

      longestWord = strSplit[i];
       }
      }
    }
    return longestWord;
  }
console.log(x);
