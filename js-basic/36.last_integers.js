/**
 * @Anik__January_31_2023
 *
 * @Problem
 * Write a JavaScript program to check whether the last digit of the three given positive integers is same.
 *
 */

let lastIntegers = (n1, n2, n3) => {
  if (n1 > 0 && n2 > 0 && n3 > 0) {
    let ln1 = n1 % 10;
    let ln2 = n2 % 10;
    let ln3 = n3 % 10;

    return ln1 === ln2 && ln2 === ln3 && ln1 === ln3 ? true : false;
  } else {
    return false;
  }
};
console.log(lastIntegers(345, 7895, 915)); //true
console.log(lastIntegers(3451, 78954, 914)); //false
console.log(lastIntegers(20, -30, 400)); //false
