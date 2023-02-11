/**
 * @Anik__February_03_2023
 *
 * @Problem
 * Write a JavaScript program to check from three given integers that whether a number is greater than or equal to 20 and less than one of the others.
 *
 */

let checkNumber = (n1, n2, n3) => {
  if (n1 >= 20 && (n1 < n2 || n1 < n3)) {
    return true;
  } else if (n2 >= 20 && (n2 < n1 || n2 < n3)) {
    return true;
  } else if (n3 >= 20 && (n3 < n1 || n3 < n2)) {
    return true;
  }
  return false;
};

// console.log(checkNumber(23, 45, 10)); //true
// console.log(checkNumber(23, 23, 10)); //false
// console.log(checkNumber(21, 66, 75)); //true

/**
 * @Another_Way_with_ternary_operator
 */
let checkNum = (n1, n2, n3) =>
  (n1 >= 20 && (n1 < n2 || n1 < n3)) ||
  (n2 >= 20 && (n2 < n1 || n2 < n3)) ||
  (n3 >= 20 && (n3 < n1 || n3 < n2));

console.log(checkNum(23, 45, 10)); //true
console.log(checkNum(23, 23, 10)); //false
console.log(checkNum(21, 66, 75)); //true
