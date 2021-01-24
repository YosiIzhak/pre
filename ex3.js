const input = require(`readline-sync`);

function getNumber(num) {
let num_ot = {
    0: "zero",
    1: "one",
    2: "two",
    3: "three", 
    4: "four",
    5: "five",
    6: "six",
    7: "seven",
    8: "eight",
    9: "nine",
  };
  return num_ot[num] ||'Sorry, no founded';
}
let num = input.question("please enter number between 0-9: ");
console.log(getNumber(num));
