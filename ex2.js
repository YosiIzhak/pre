'use strict';

const input = require(`readline-sync`);

let num1 = input.question("Enter first number: ");

let num2 = input.question("Enter second number: ");

addNum(Number(num1),Number(num2));

function addNum(p1, p2) {
 if ((p1+p2)  == 10)
 {
  console.log("makes 10");
 }
 else
 {
  console.log("nope");
 }
}