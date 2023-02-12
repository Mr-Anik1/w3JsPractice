/**
 * @Anik__February_11_2023
 *
 * @Problem
 * Write a JavaScript program to create a new string of specified copies (positive number) of a given string.
 *
 */

let copyStr = (str, n) => (str.length <= 0 ? false : str.repeat(n));

console.log(copyStr("Anik1-", 5)); //Anik1-Anik1-Anik1-Anik1-Anik1-
console.log(copyStr("", 5)); //false

/**
 *
 * @Another_Way
 *
 */
let copyString = (str, n) => {
  if (str.length <= 0) {
    return false;
  }
  let nStr = "";
  for (let i = 0; i < n; i++) {
    nStr += str;
  }
  return nStr;
};

console.log(copyString("--1ABC", 6)); //--1ABC--1ABC--1ABC--1ABC--1ABC--1ABC
console.log(copyString("", 6)); //false
