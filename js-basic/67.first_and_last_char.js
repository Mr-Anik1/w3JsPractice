/**
 * @Anik__March_10_2023
 *
 * @Problem
 * Write a JavaScript program to create a new string from a given string, removing the first and last characters of the string if the first or last character are 'P'. Return the original string if the condition is not satisfied.
 *
 */

let newStr = (str) => {
  let start = 0;
  let end = str.length;
  if (str.startsWith("P")) {
    start += 1;
  }
  if (str.endsWith("P")) {
    end -= 1;
  }
  return str.slice(start, end);
};

console.log(newStr("PythonP")); //ython
console.log(newStr("JavaScript")); //JavaScript
console.log(newStr("Python")); //ython
