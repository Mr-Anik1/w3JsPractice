/**
 * @Anik__March_10_2023
 *
 * @Problem
 * Write a JavaScript program to create a new string using the first and last n characters from a given sting. The string length must be greater or equal to n.
 *
 */

let newStr = (str, n) => {
  if (str.length >= n) {
    return `${str.slice(0, n)}${str.slice(-n)}`;
  }
  return str;
};

console.log(newStr("JavaScript", 3)); //Javipt
console.log(newStr("JavaScript", 2)); //Japt
