/**
 * @Anik__March_13_2023
 *
 * @Problem
 * Write a JavaScript program to add two digits of a given positive integer of length two.
 *
 */

let addDigit = (int, sum = 0) => {
  let sInt = `${int}`;
  for (let i = 0; i < sInt.length; i++) {
    sum += +sInt[i];
  }
  return sum;
};

console.log(addDigit(34)); //7
console.log(addDigit(50)); //5

/**
 * @Another_Way
 */

let add = (n) => (n % 10) + Math.floor(n / 10);

console.log(add(45)); //9
console.log(add(59)); //14
