/**
 * @Anik__March_12_2023
 *
 * @Problem
 * Write a JavaScript program to test whether an array of integers of length 2 does not contain 1 or a 3.
 *
 */

let checkVlaue = (arr) =>
  arr.length === 2 && !arr.includes(1) && !arr.includes(3);

// console.log(checkVlaue([7, 8])); //true
// console.log(checkVlaue([3, 2])); //false
// console.log(checkVlaue([0, 1])); //false

/**
 * @Another_One
 */
let checkArrVal = (arr) =>
  arr.length === 2 && (arr.includes(1) || arr.includes(3)) ? false : true;

console.log(checkArrVal([7, 8])); //true
console.log(checkArrVal([3, 2])); //false
console.log(checkArrVal([0, 1])); //false
