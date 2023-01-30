/**
 * @Anik__January_28_2023
 *
 * @Problem
 * Write a JavaScript program to create a new string from a given string with the first character of the given string added at the front and back.
 *
 */

let front_back = (str) => {
  return `${str[0]}${str}${str[0]}`;
};
console.log(front_back("swift")); //sswifts
console.log(front_back("w3resource")); //ww3resourcew
console.log(front_back("A")); //AAA
console.log(front_back("ri")); //rrir
