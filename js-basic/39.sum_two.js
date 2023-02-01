/**
 * @Anik__February_01_2023
 *
 * @Problem
 * Write a JavaScript program to compute the sum of the two given integers, If the sum is in the range 50..80 return 65 other wise return 80.
 *
 */

let sumOfTwoInt = (num1, num2) => {
  let sum = num1 + num2;
  return sum >= 50 && sum <= 80 ? 65 : 80;
};

console.log(sumOfTwoInt(45, 30)); //65
console.log(sumOfTwoInt(5, 95)); //80
console.log(sumOfTwoInt(9, 30)); //80
