/**
 * @Anik__February_03_2023
 *
 * @Problem
 * Write a JavaScript program to check two given integer values and return true if one of the number is 15 or if their sum or difference is 15.
 *
 */

let checkNumebr = (n1, n2) =>
  n1 === 15 || n2 === 15 || n1 + n2 === 15 || Math.abs(n1 - n2) === 15;

console.log(checkNumebr(5, 20)); //true
console.log(checkNumebr(7, 9)); //false
console.log(checkNumebr(15, 20)); //true
