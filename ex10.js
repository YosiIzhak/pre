const input = require(`readline-sync`);
let str;

 str = input.question("please enter a string.. " );

var replaced = str.split(' ').join('*');
console.log(replaced);