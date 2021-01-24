const input = require(`readline-sync`);
let arr1 = [];
function revArr(arr)
{
    let reversedArr = arr.reverse();
    return reversedArr;
}
let num = input.question("please enter a number.. ");
function isNumeric(value) {
    return /^-?\d+$/.test(value);
  }  
  if (isNumeric(num) === false)
  {
    console.log("stop execution");
      exit;
  }
  arr1 = num.split('');

console.log(revArr(arr1));
