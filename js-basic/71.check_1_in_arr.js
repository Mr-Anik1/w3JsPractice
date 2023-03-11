/**
 * @Anik__March_11_2023
 *
 * @Problem
 * Write a JavaScript program to check whether 1 appears in first or last position of a given array of integers. The array length must be greater or equal to 1.
 *
 */

let check1 = (arr) =>
  arr.length >= 1 && (arr[0] === 1 || arr[arr.length - 1] === 1);

console.log(check1([1, 2, 3, 4])); //true
console.log(check1([0, 1, 2, 3, 4, 1])); //true
console.log(check1([10, 2, 3, 40])); //false
console.log(check1([])); //false
