/**
 * @Anik__February_03_2023
 *
 * @Problem
 * Write a JavaScript program to replace every character in a given string with the character following it in the alphabet.
 *
 */

let nextString = (str, nStr = "", i = 0) => {
  if (i > str.length - 1) {
    return nStr;
  }

  //a=97, A=65
  if (str[i] == "z") {
    nStr += String.fromCodePoint(97);
    return nextString(str, nStr, (i += 1));
  } else if (str[i] == "Z") {
    nStr += String.fromCodePoint(65);
    return nextString(str, nStr, (i += 1));
  }

  let code = str[i].codePointAt(0);
  nStr += String.fromCodePoint(code + 1);

  return nextString(str, nStr, (i += 1));
};

console.log(nextString("Anik")); //Bojl
console.log(nextString("PYTHON")); //QZUIPO
console.log(nextString("zAbZ")); //aBcA
console.log(nextString("W3R")); //X4S
console.log(nextString("30")); //41

/**
 * @Hint
 */
//let str = "A";
//console.log(String.fromCodePoint(98));
// console.log(str.codePointAt(0));
