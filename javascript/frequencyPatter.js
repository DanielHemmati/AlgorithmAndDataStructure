/*
 * Write a function called same, which accepts two arrays.
 * The function should return true if every value in the
 * array has it's corresponding value squared in the second
 * array. The frequency of values must be the same.
 */
// that the quesiton ☝️

/**
 *
 * @param {Array} arr1
 * @param {Array} arr2
 * @retunr {Boolean}
 */
// this is my solution with O(n) + O(n) == O(n)
function frequencyCounter(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;
  let sumArray1 = arr1.map((a) => a ** 2).reduce((a, b) => a + b, 0);
  let sumArray2 = arr2.reduce((a, b) => a + b, 0);
  return sumArray1 === sumArray2 ? true : false;
}

let a = [2, 3, 4];
let b = [4, 9, 16];
// console.log(frequencyCounter(a, b));
// console.log(b)

//------------- i don't like this solution -------------

/**
 *
 * @param {Array} arr1
 * @param {Array} arr2
 */
function frequency(arr1, arr2) {
  if (arr1.length !== arr2.length) return false;

  let obj1 = {};
  let obj2 = {};

  arr1.forEach((val) => {
    obj1[val] = (obj1[val] || 0) + 1;
  });

  arr2.forEach((val) => {
    obj2[val] = (obj2[val] || 0) + 1;
  });

  console.log("this is obj1, " + JSON.stringify(obj1, null, 2));
  console.log("this is obj2, " + JSON.stringify(obj2, null, 2));

  for (let key in obj1) {
    // if (!obj2[key ** 2]) return false;
    // or
    if (!(key ** 2 in obj2)) return false;
    if (obj2[key ** 2] !== obj1[key]) return false;
  }

  return true;
}

// nah i don't like this
console.log(frequency(a, b));
