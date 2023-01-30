/**
 * @Anik__January_30_2023
 *
 * @Problem
 * Write a JavaScript program to find a value which is nearest to 100 from two different given integer values.
 *
 */

let nearest100 = (num1, num2) => {
  if (num1 != num2) {
    return 100 - num1 < 100 - num2 ? num1 : num2;
  }
  return false;
};

console.log(nearest100(90, 23)); //90
console.log(nearest100(41, 75)); //75
console.log(nearest100(-90, -89)); //-89
console.log(nearest100(90, 90)); //false
