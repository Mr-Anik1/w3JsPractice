/**
 * @Anik__February_12_2023
 *
 * @Problem
 * Write a JavaScript program to create a new string of 4 copies of the last 3 characters of a given original string. The length of the given string must be 3 and above.
 *
 */

let copyString = (str, n) =>
  str.length >= 3 ? str.slice(-3).repeat(n) : false;

console.log(copyString("aniK", 4)); //niKniKniKniK
console.log(copyString("w3", 4)); //false
console.log(copyString("Jav", 4)); //JavJavJavJav
console.log(copyString("Python 3.0", 4)); //3.03.03.03.0
