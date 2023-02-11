/**
 * @Anik__February_03_2023
 *
 * @Problem
 * Write a JavaScript program to check two given non-negative integers that whether one of the number (not both) is multiple of 7 or 11.
 *
 */
let multipleOf = (n1, n2) => {
  if ((n1 % 7 === 0 || n1 % 11 === 0) && (n2 % 7 === 0 || n2 % 11 === 0)) {
    return false;
  } else if (n1 % 7 === 0 || n1 % 11 === 0 || n2 % 7 === 0 || n2 % 11 === 0) {
    return true;
  }
  return false;
};

console.log(multipleOf(14, 21)); //false
console.log(multipleOf(14, 20)); //true
console.log(multipleOf(16, 20)); //false
