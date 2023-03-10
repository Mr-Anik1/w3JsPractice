/**
 * @Anik__February_16_2023
 *
 * @Problem
 * Write a JavaScript program to create a string using the middle three characters of a given string of odd length. The string length must be greater or equal to three.
 *
 */

let middleString = (str) => {
  if (str.length >= 3 && str.length % 2 == 1) {
    let start = Math.floor(str.length / 2) - 1;
    return str.slice(start, start + 3);
  }
  return str;
};

console.log(middleString("abcdefg")); //cde
console.log(middleString("HTML5")); //TML
console.log(middleString("Python")); //Python
console.log(middleString("PHP")); //PHP
console.log(middleString("Exercises")); //rci
