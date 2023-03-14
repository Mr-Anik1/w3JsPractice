/**
 * @Anik__March_13_2023
 *
 * @Problem
 * Write a JavaScript program to test whether a given array of integers contains 30 and 40 twice. The array length should be 0, 1, or 2.
 *
 */

let contains30and40 = (arr) => {
  let a = arr[0];
  let b = arr[1];
  if ((a === 30 && b === 30) || (a === 40 && b === 40)) {
    return true;
  } else {
    return false;
  }
};

console.log(contains30and40([40, 40])); //true
console.log(contains30and40([30, 40])); //false
console.log(contains30and40([30, 30])); //true
