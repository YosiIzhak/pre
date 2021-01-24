const input = require(`readline-sync`);
let num;
do
{
  num = input.question("please enter a positive number.. " );
}
while (num <= 0);

let mult = 1;
for (let i = 1; i <= num; i++)
{
  mult = mult*i;   
}

 console.log("the factorial of ",num, " is: ",  mult);