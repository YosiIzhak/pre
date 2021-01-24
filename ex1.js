var readlineSync = require('readline-sync');
let num = readlineSync.question("How many people are you going with? ");

dat = (readlineSync.keyInYN("Should it be Kosher? (y/n)") ) 

if (dat === true)
{ 
     (readlineSync.keyInYN("should it be Kashrut Lemehadrin? ") )
}
else 
{
  if (dat != false)
  {
    console.log("stop execution" );
    exit;
  }
  
}
meal = ['fish', 'meat', 'diary', 'coffee'],
  index = readlineSync.keyInSelect(meal, 'Which resturant?');

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





   