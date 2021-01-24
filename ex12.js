const input = require(`readline-sync`);

var str = [];
let newstr = [];

 str = input.question("please enter a string.. " );

for (var i = 0; i < str.length; i++)
 {
    if (str[i] == 'a' ||  str[i] ==  'e' || str[i] ==  'i' || str[i] == 'o' || str[i] == 'u' ||str[i] == 'y')
    {
      newstr[i] = str[i].toUpperCase();
    }
    else
    {
        newstr[i] = str[i];
    }
}
var replaced = newstr.join('');
console.log(replaced);