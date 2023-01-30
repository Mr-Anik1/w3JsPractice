/**
 * @Anik__January_29_2023
 *
 * @Problem
 *  Write a JavaScript program to check whether a given positive number is a multiple of 3 or a multiple of 7
 *
 */

let checkNum = (num) => {
  return num % 3 == 0 || num % 7 == 0 ? true : false;
};
console.log(checkNum(15)); //true
console.log(checkNum(25)); //false
console.log(checkNum(49)); //true
