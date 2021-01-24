const input = require(`readline-sync`);

let num = input.question("please choose a number larger than 10.. " );

while (num<=10)
{
 num = input.question("please choose a number LARGER than 10.. " );
}
console.log("thank you");