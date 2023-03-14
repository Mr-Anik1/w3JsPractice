/**
 * @Anik__March_13_2023
 *
 * @Problem
 * Write a JavaScript program to swap the first and last elements of a given array of integers. The array length should be at least 1.
 *
 */

let swapFirstAndLast = (arr) => {
  //swap
  [arr[0], arr[arr.length - 1]] = [arr[arr.length - 1], arr[0]];

  return arr;
};

console.log(swapFirstAndLast([1, 2, 3, 4, 5])); //[ 5, 2, 3, 4, 1 ]
console.log(swapFirstAndLast([0, 2, 1])); //[ 1, 2, 0 ]
console.log(swapFirstAndLast([3])); //[3]
