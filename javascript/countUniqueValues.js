/*
 * Implement a function called countUniqueValues,
 * which accepts a sorted array, and counts the
 * unique values in the array. There can be negative
 * numbers in the array, but it will always be sorted.
 * it's sorted array, and that's really important.
 */

/**
 *
 * @param {Array} arr
 */
function countUniquValues(arr) {
  return new Set(arr).size;
}

let a = [1, 1, 1, 1, 1, 1, 2];
let b = [1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13];
// console.log(countUniquValues(b));

/* q*
 *
 * @param {Array} arr
 */
function withPointers(arr) {
  if (arr.length === 0) return 0;
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  // get the length
  // + 1 b/c it started from zero
  return i + 1;
}

console.log(withPointers(b));
