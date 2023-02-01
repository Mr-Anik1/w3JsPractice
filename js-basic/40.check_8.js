/**
 * @Anik__February_01_2023
 *
 * @Problem
 * Write a JavaScript program to check from two given integers whether one of them is 8 or their sum or difference is 8.
 *
 */

let check8 = (n1, n2) =>
  n1 === 8 || n2 === 8 || n1 + n2 === 8 || Math.abs(n1 - n2) === 8;

console.log(check8(7, 8)); //true
console.log(check8(24, 32)); //true
console.log(check8(17, 18)); //false
