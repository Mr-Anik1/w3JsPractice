/**
 * @Anik__February_16_2023
 *
 * @Problem
 * Write a JavaScript program to concatenate two strings and return the result. If the length of the strings are not same then remove the characters from the longer string.
 *
 */

let concate = (str1, str2) => {
  if (str1.length > str2.length) {
    str1 = str1.slice(-str2.length);
  } else if (str2.length > str1.length) {
    str2 = str2.slice(-str1.length);
  }
  return `${str1}${str2}`;
};

console.log(concate("Anik420", "Manik")); //ik420Manik
console.log(concate("Python", "JS")); //onJS
console.log(concate("ab", "cdef")); //abef
