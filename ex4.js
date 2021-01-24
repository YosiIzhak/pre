var readlineSync = require('readline-sync');
let num = readlineSync.question("How many people are you going with? ");
function isNumeric(value) {
  return /^-?\d+$/.test(value);
}

if (isNumeric(num) == false)
{
  console.log("stop execution" );
    exit;
}   
let dat = (readlineSync.keyInYN("Should it be Kosher? ") ) 

if (dat == true)
{ 
     let dat2 = readlineSync.keyInYN("should it be Kashrut Lemehadrin? ")
     if (typeof dat2 !== "boolean")
    {
      console.log("stop execution" );
      exit;
    }
}
else 
{
  if (typeof dat !== "boolean")
  {
    console.log("stop execution" );
    exit;
  }
  
}
var meal = ['fish', 'meat', 'diary', 'coffee'];
  let index = readlineSync.keyInSelect(meal, 'Which resturant?');
console.log(++index );
switch(index) {
  case 1:
    console.log('the best fish resturant is in the beach');
        break;
  case 2:
    console.log('the best meat resturant is in Alenbi');
    break;
  case 3:
    console.log('the best diary resturant is in Azrieli');
    break;
  case 4:
    console.log('the best coffee is in Yafo');
    break;
 
 }

   



