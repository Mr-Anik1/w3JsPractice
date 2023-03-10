/**
 * @Anik__March_10_2023
 *
 * @Problem
 * Write a JavaScript program to rotate the elements left of a given array of integers of length 3.
 *
 */

let rotateArr = (arr) => {
  for (let i = 0; i < arr.length - 1; i++) {
    [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
  }
  return arr;
};

console.log(rotateArr([3, 4, 5])); //[ 4, 5, 3 ]
console.log(rotateArr([0, -1, 2])); //[ -1, 2, 0 ]
console.log(rotateArr([7, 6, 5])); //[ 6, 5, 7 ]
