const input = require(`readline-sync`);
let str, i;

 str = input.question("please enter a string.. " );

const len = str.length;

    
   for (i = 0; i < len / 2; i++) 
    {

         if (str[i] !== str[len - 1 - i]) 
         {
             console.log("this is not a palindrome");
             break;
         }
    }
    if (i => len/2)
    {
    console.log("this is a palindrome!");
    }