/**
 * @Anik__March_13_2023
 *
 * @Problem
 * Write a JavaScript to add two positive integers without carry.
 *
 */

let addWithoutCarry = (n1, n2) => {
  let num1 = `${n1}`;
  let num2 = `${n2}`;
  let result = [];

  for (let i = 0; i < num1.length; i++) {
    let sum = +num1[i] + +num2[i];
    result.push(`${sum}`.slice(-1));
  }

  return +result.join("");
};

console.log(addWithoutCarry(222, 911)); //133
console.log(addWithoutCarry(200, 900)); //100
console.log(addWithoutCarry(999, 999)); //888
