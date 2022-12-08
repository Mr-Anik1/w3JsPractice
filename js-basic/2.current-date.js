/**
 * Write a JavaScript program to get the current date.
Expected Output :
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
*/
let today = new Date();

let mm = today.getMonth() + 1;
mm = mm < 10 ? `0${mm}` : `${mm}`;
let dd = today.getDate();
dd = dd < 10 ? `0${dd}` : `${dd}`;
let yy = today.getFullYear();

console.log(`${mm}-${dd}-${yy}`);
console.log(`${mm}/${dd}/${yy}`);
console.log(`${dd}-${mm}-${yy}`);
console.log(`${dd}/${mm}/${yy}`);
