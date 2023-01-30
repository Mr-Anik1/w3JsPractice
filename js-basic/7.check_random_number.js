/**
 *@Anik__January_13_2023
 *
 * @Problem
 * Write a JavaScript program where the program takes a random integer between 1 to 10, the user is then prompted to input a guess number. If the user input matches with guess number, the program will display a message "Good Work" otherwise display a message "Not matched".
 *
 */

let checkRandom = (inputNum) => {
  let rand = Math.floor(Math.random() * 10) + 1;
  if (inputNum === rand) {
    return `Good Work`;
  } else {
    return `Not matched, the number was ${rand}`;
  }
};

console.log(checkRandom(6));

/**
 * @Ternary_Operator
 * @param {*} inputNum
 * @returns
 */
let checkRandom2 = (inputNum) => {
  let rand = Math.floor(Math.random() * 10) + 1;

  return inputNum === rand
    ? `Good Work`
    : `Not matched, the number was ${rand}`;
};
console.log(checkRandom2(8));
