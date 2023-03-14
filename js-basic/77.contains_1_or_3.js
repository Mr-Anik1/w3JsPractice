/**
 * @Anik__March_12_2023
 *
 * @Problem
 * Write a JavaScript program to test whether an array of integers of length 2 contains 1 or a 3.
 *
 */

let checkArr = (arr) =>
  arr.length === 2 && (arr.includes(1) || arr.includes(3));

console.log(checkArr([1, 5])); //true
console.log(checkArr([2, 3])); //true
console.log(checkArr([7, 5])); //false
