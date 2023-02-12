/**
 * @Anik__February_12_2023
 *
 * @Problem
 * Write a JavaScript program to create a new string without the first and last character of a given string.
 *
 */

let withoutFirstLastChar = (str) => str.slice(1, str.length - 1);

console.log(withoutFirstLastChar("w3resource")); //3resourc
console.log(withoutFirstLastChar("JavaScript")); //avaScrip
