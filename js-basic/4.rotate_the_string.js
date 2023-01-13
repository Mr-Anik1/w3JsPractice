/**
 * @Anik__January_12_2023
 *
 * @Problem_Name
 * Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically removing one letter from the end of the string and attaching it to the front
 *
 * @param {*} str
 * @returns
 */

let rotate = (str) => {
  return str.split("").reverse().join("");
};
console.log(rotate("Anik")); //kinA
console.log(rotate("w3resource")); //ecruoser3w

/*
  str.split("") => স্ট্রিং টিকে অ্যারেতে রূপান্তর করবে => [ 'A', 'n', 'i', 'k' ]

  [ 'A', 'n', 'i', 'k' ].reverse() => অ্যারের ইলিমেন্টগুলোকে উল্টাবে => [ 'k', 'i', 'n', 'A' ]

  [ 'k', 'i', 'n', 'A' ].join("") = অ্যারেটিকে আবার স্ট্রিং এ রূপান্তর করবে => kinA

*/

/**
 * @Another_Example
 */
let rotateFunk = (str) => {
  let arr = [];
  for (let i = str.length - 1; i >= 0; i--) {
    arr.push(str[i]);
  }
  return arr.join("");
};

console.log(rotateFunk("Bangladesh")); //hsedalgnaB
console.log(rotateFunk("Anik")); //kinA
