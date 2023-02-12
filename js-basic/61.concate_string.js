/**
 * @Anik__February_12_2023
 *
 * @Problem
 * Write a JavaScript program to concatenate two strings except their first character.
 *
 */

let concateString = (str1, str2) => `${str1.slice(1)}${str2.slice(1)}`;

console.log(concateString("Anik", "fOkir")); //nikOkir
console.log(concateString("PHP", "JS")); //HPS
console.log(concateString("AA", "BB")); //AB
