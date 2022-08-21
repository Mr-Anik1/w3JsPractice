/**
 * Write a JavaScript program to display the current day and time in the following format.
 * 
 * Sample Output : Today is : Tuesday.
   Current time is : 10 PM : 30 : 38
 */

let date = new Date();
let day = date.getDay();
let dayList = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday ",
  "Thursday",
  "Friday",
  "Saturday",
];
let today = dayList[day];

let hour = date.getHours();
let prepand = hour > 12 ? "PM" : "AM";
hour = hour > 12 ? hour - 12 : hour;

let minute = date.getMinutes();
minute = `${minute < 10 ? "0" : ""}${minute}`;

let second = date.getSeconds();
second = `${second < 10 ? "0" : ""}${second}`;

const todaysTime = `
   Today is:${today}
   Current time is:${hour}${prepand}:${minute}:${second}`;
console.log(todaysTime);
