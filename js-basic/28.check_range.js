/**
 * @Anik__January_29_2023
 *
 * @Problem
 * Write a JavaScript program to check whether two given integer values are in the range 50..99 (inclusive). Return true if either of them are in the said range.
 *
 */

let checkRange = (n1, n2) => {
  if ((n1 >= 50 && n1 <= 99) || (n2 >= 50 && n2 <= 99)) {
    return true;
  } else {
    return false;
  }
};
console.log(checkRange(49, 56)); //true
console.log(checkRange(64, 100)); //true
console.log(checkRange(9, 100)); //false
