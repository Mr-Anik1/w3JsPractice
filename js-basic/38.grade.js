/**
 * @Anik__January_31_2023
 *
 * @Problem
 * Write a JavaScript program to check the total marks of a student in various examinations. The student will get A+ grade if the total marks are in the range 89..100 inclusive, if the examination is "Final-exam." the student will get A+ grade where total marks must be greater than or equal to 90. Return true if the student get A+ grade or false otherwise.
 *
 */

let grade = (marks, exam) => (exam ? marks >= 90 : marks >= 89 && marks <= 100);

console.log(grade(89, true)); //false
console.log(grade(78, "")); //false
console.log(grade(89, "")); //true
console.log(grade(94, true)); //true
