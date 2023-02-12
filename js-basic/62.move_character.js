/**
 * @Anik__February_12_2023
 *
 * @Problem
 * Write a JavaScript program to move last three character to the start of a given string. The string length must be greater or equal to three.
 *
 */

let moveCharacter = (str) =>
  str.length >= 3 ? `${str.slice(-3)}${str.slice(0, str.length - 3)}` : str;

console.log(moveCharacter("Python")); //honPyt
console.log(moveCharacter("JS")); //JS
console.log(moveCharacter("JavaScript")); //iptJavaScr
