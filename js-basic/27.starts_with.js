/**
 * @Anik__January_29_2023
 *
 * @Problem
 * Write a JavaScript program to check whether a string starts with 'Java' and false otherwise.
 *
 */

let startWithJava = (str) => str.startsWith("Java");
// console.log(startWithJava("JavaScript")); //true
// console.log(startWithJava("avaScript")); //false
// console.log(startWithJava("Jav")); //false

let another = (str) => (str.slice(0, 4) == "Java" ? true : false);

console.log(another("Jav")); //false
console.log(another("Javascript")); //true
console.log(another("vascript")); //false
