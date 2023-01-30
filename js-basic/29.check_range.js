/**
 * @Anik__January_29_2023
 *
 * @Problem
 * Write a JavaScript program to check whether three given integer values are in the range 50..99 (inclusive). Return true if one or more of them are in the said range.
 *
 */

let checkRange = (n1, n2, n3) =>
  (n1 >= 50 && n1 <= 99) || (n2 >= 50 && n2 <= 99) || (n3 >= 50 && n3 <= 99)
    ? true
    : false;

console.log(checkRange(50, 90, 99)); //true
console.log(checkRange(5, 9, 199)); //false
console.log(checkRange(65, 9, 199)); //true
