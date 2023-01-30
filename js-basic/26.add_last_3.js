/**
 * @Anik__January_29_2023
 *
 * @Problem
 *  Write a JavaScript program to create a new string from a given string taking the last 3 characters and added at both the front and back. The string length must be 3 or more.
 *
 */

let newString = (str) => {
  if (str.length >= 3) {
    let last_3 = str.substring(str.length - 3);
    return `${last_3}${str}${last_3}`;
  }
  return false;
};
// console.log(newString("W3resource")); //rceW3resourcerce
// console.log(newString("Ani")); //AniAniAni
// console.log(newString("go")); //false

let addString = (str) =>
  str.length >= 3 ? `${str.slice(-3)}${str}${str.slice(-3)}` : false;
console.log(addString("Hello")); //lloHellollo
console.log(addString("He")); //false
console.log(addString("t10")); //t10t10t10
