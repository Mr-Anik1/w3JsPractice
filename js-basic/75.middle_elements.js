/**
 * @Anik__March_11_2023
 *
 * @Problem
 * Write a JavaScript program to create a new array taking the middle elements of the two arrays of integer and each length 3.
 *
 */

let middleElements = (arr1, arr2) => [
  arr1[Math.floor(arr1.length / 2)],
  arr2[Math.floor(arr1.length / 2)],
];

console.log(middleElements([1, 2, 3], [4, 5, 6])); //[ 2, 5 ]
console.log(middleElements([3, 3, 3], [2, 8, 0])); //[ 3, 8 ]
console.log(middleElements([4, 2, 7], [2, 4, 5])); //[ 2, 4 ]
