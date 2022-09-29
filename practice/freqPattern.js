/**
 *
 * @param {Array} arr1
 * @param {Array} arr2
 */
function frequency(arr1, arr2) {
  const arr1Double = arr1.map((x) => x ** 2).reduce((a, b) => a + b, 0);
  const arr2Sum = arr2.reduce((a, b) => a + b, 0);
  return arr1Double === arr2Sum ? true : false;
}

// let a = [2, 3, 4];
// let b = [4, 9, 16];
// console.log(frequency(a, b));

/**
 *
 * @param {Array} arr1
 * @param {Array} arr2
 */
function freqPattern(arr1, arr2) {
  const obj1 = {};
  const obj2 = {};

  arr1.forEach((item) => {
    obj1[item] = (obj1[item] || 0) + 1;
  });

  arr2.forEach((item) => {
    obj2[item] = (obj2[item] || 0) + 1;
  });

  for (let key in obj1) {
    if (obj2[key ** 2] && obj2[key ** 2] === obj1[key]) {
      return true;
    }
  }

  return false;
}
let a = [2, 3, 4];
let b = [4, 9, 16];
console.log(freqPattern(a, b));
