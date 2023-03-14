/**
 * @Anik__March_14_2023
 *
 * @Problem
 * Write a JavaScript to replace each character of a given string by the next one in the English alphabet.
 *
 *
 *
 *
 * A=65, Z=90, a=97, z=122
 * Unicode to Character => String.fromCodePoint(90)//Z
 * Chracter to Unicode => "A".charCodeAt(0)//65
 * String.fromCodePoint(32);// space
 *
 *
 */

let replaceString = (str) => {
  let strArr = str.split("");

  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] == "Z") {
      strArr[i] = "A";
    } else if (strArr[i] == "z") {
      strArr[i] = "a";
    } else if (
      strArr[i] < "A" ||
      (strArr[i] > "Z" && strArr[i] < "a") ||
      strArr[i] > "z"
    ) {
      strArr[i]; //not replace
    } else {
      strArr[i] = String.fromCodePoint(strArr[i].charCodeAt(0) + 1);
    }
  }

  return strArr.join("");
};

console.log(
  replaceString(
    `What is your name? My name is Zebra. Question :=:> ["Write a JavaScript to replace each character of a given string by the next one in the English alphabet."]{}`
  )
);
//Xibu jt zpvs obnf? Nz obnf jt Afcsb. Rvftujpo :=:> ["Xsjuf b KbwbTdsjqu up sfqmbdf fbdi dibsbdufs pg b hjwfo tusjoh cz uif ofyu pof jo uif Fohmjti bmqibcfu."]{}

console.log(replaceString("abcdxyz")); //bcdeyza
