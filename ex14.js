const input = require(`readline-sync`);
var arr = [];
var num;
 num = input.question("please enter a num.. " );
 function isNumeric(value) {
  return /^-?\d+$/.test(value);
}

if (isNumeric(num) == false)
{
  console.log("stop execution" );
    exit;
}   

for (let pos = 0; pos < num; pos++) 
{
  arr[pos] =  Math.floor(Math.random() * 50) + 1;
}
  console.log("max is: ",Math.max(...arr));
  console.log("min is: ",Math.min(...arr));