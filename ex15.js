const input = require(`readline-sync`);
let arr1 = [], arr2 = [];
function joinArr(a, b)
{
    let mergedArr = [...a, ...b];
    return mergedArr;
}

let str = input.question("please enter a string.. ");
arr1 = str.split(' ');
let str1 = input.question("please enter another string.. ");
arr2 = str1.split(' ');

console.log( joinArr(arr1, arr2));



//console.log(joinArr(arr1, arr2));
