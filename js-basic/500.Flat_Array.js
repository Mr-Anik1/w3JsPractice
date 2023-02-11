function flattenArray(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      result = result.concat(flattenArray(arr[i]));
    } else {
      result.push(arr[i]);
    }
  }
  return result;
}

let arr = [1, 3, [2, [301, 4], 6, 9], 4];
let flattenedArr = flattenArray(arr);
console.log(flattenedArr);
