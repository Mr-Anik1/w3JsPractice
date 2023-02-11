/**
 * @Anik__February_03_2023
 *
 * @Problem
 * Write a JavaScript program to check whether a given number is presents in the range 40..10000.
 *
 */

let range = (range1, range2, num) =>
  num < 40 || num > 10000 ? false : num >= range1 && num <= range2;

console.log(range(40, 4000, 45)); //true
console.log(range(80, 320, 79)); //false
console.log(range(20, 4000, 30)); //false
