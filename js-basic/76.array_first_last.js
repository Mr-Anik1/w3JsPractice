/**
 * @Anik__March_12_2023
 *
 * @Problem
 * Write a JavaScript program to create a new array taking the first and last elements from a given array of integers and length must be greater or equal to 1.3.
 *
 */

let newArr = (arr) => [arr[0], arr[arr.length - 1]];

console.log(newArr([1, 2, 3, 4, 5])); //[ 1, 5 ]
console.log(newArr([17, 12, 34, 78])); //[ 17, 78 ]
