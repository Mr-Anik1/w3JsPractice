/**
 * @Anik__January_28_2023
 *
 * @Problem
 * Write a JavaScript program to create a new string from a given string changing the position of first and last characters. The string length must be greater than or equal to 1.
 */

let changePosition = (str) => {
  if (str.length > 1) {
    return `${str[str.length - 1]}${str.substring(1, str.length - 1)}${str[0]}`;
  }
  return str;
};
console.log(changePosition("Anik")); //kniA
console.log(changePosition("A")); //A
console.log(changePosition("An")); //nA
console.log(changePosition("bar")); //rab
