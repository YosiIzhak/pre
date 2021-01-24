const input = require(`readline-sync`);
let num;
do
{
  num = input.question("please enter a positive number.. " );
}
while (num <= 0);

for (let i = 1; i <= num; i++) {
    let flag = 0;

   
    for (let j = 2; j < i; j++) {
        if (i % j == 0) {
            flag = 1;
            break;
        }
    }

    
    if (i > 1 && flag == 0) {
        console.log(i);
    }
}
