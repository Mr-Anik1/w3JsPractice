/**
 * @Anik__February_11_2023
 *
 * @Problem
 * Write a JavaScript program to check whether a given string contains equal number of p's and t's.
 *
 */

let equalPT = (str) => {
  return str.replace(/[^p]/g, "").length === str.replace(/[^t]/g, "").length;
};

// console.log(equalPT("paatpss")); //false
// console.log(equalPT("anptptor")); //true

/*
  str.replace(/[^p]/g, "") দ্বারা বুঝায় উক্ত স্ট্রিং এ 'p' ছাড়া বাকি ক্যারেক্টার গুলোকে "" দ্বারা replace করবে।  ^  চিহ্ন দ্বারা বুঝায় negation operator[ না বোধক ], অর্থাৎ এটি ব্রাকেটের মধ্যে ^ চিহ্নের পরে নির্দিষ্ট করা অক্ষরগুলো বাদে যে কোনো অক্ষরের সাথে মিলবে এবং ^ চিহ্নের পরের অক্ষরগুলো বাদে স্ট্রিং এর বাদবাকি অক্ষরগুলোকে "" দ্বারা replace করবে। 
*/

let checkPT = (str) => {
  let p = 0;
  let t = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "p") {
      p += 1;
    } else if (str[i] === "t") {
      t += 1;
    }
  }
  return p === t;
};

console.log(checkPT("paatpss")); //false
console.log(checkPT("anptptor")); //true
