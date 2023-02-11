/**
 * @Anik__February_03_2023
 *
 * @Problem
 * Write a JavaScript program to check from three given numbers (non negative integers) that two or all of them have the same rightmost digit.
 *
 */

let checkRightmost = (n1, n2, n3) => {
  if (n1 >= 0 && n2 >= 0 && n3 >= 0) {
    return n1 % 10 === n2 % 10 || n2 % 10 === n3 % 10 || n3 % 10 === n1 % 10;
  }
};

console.log(checkRightmost(67, 45, 77)); //true
console.log(checkRightmost(20, 22, 45)); //false
console.log(checkRightmost(102, 302, 2)); //true
console.log(checkRightmost(10, -2, 28)); //undefined
