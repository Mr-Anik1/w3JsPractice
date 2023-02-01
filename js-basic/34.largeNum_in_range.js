/**
 * @Anik__January_30_2023
 *
 * @Problem
 * Write a JavaScript program to find the larger number from the two given positive integers, the two numbers are in the range 40..60 inclusive.
 *
 */

let checkLargeNumber = (num1, num2) => {
  if (num1 === num2) {
    return "Numbers are the same";
  }
  if (num1 >= 40 && num1 <= 60 && num2 >= 40 && num2 <= 60) {
    return num1 > num2 ? num1 : num2;
  }
  return "out of range";
};

console.log(checkLargeNumber(52, 44)); //52
console.log(checkLargeNumber(40, 40)); //Numbers are the same
console.log(checkLargeNumber(45, 60)); //60
console.log(checkLargeNumber(-10, 53)); //out of range
