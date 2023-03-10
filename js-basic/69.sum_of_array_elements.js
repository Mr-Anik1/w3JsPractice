/**
 * @Anik__March_10_2023
 *
 * @Problem
 * Write a JavaScript program to compute the sum of three elements of a given array of integers of length 3.
 *
 */

let sumArrElement = (arr) => arr.reduce((acc, cur) => acc + cur);

console.log(sumArrElement([1, 2, 3])); //6
console.log(sumArrElement([10, 32, 20])); //62
console.log(sumArrElement([0, 8, -11])); //-3
