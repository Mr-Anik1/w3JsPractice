/**
 * @Anik__March_11_2023
 *
 * @Problem
 * Write a JavaScript program to check whether the first and last elements are equal of a given array of integers length 3.
 *
 */

let checkFirstLast = (arr) => arr[0] === arr[arr.length - 1];

console.log(checkFirstLast([10, 20, 30])); //false
console.log(checkFirstLast([5, 20, 5])); //true
