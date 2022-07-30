/*
 * Write a function called sumZero which accepts a sorted
 * array of integers. The function should find the first pair
 * where the sum is O. Return an array that includes both
 * values that sum to zero or undefined if a pair does not exist
 */

/**
 *
 * @param {Array} arr
 */
function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[right] + arr[left];

    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

// console.log(sumZero([-3, -2, -1, 0, 1, 2, 3]));

//------------- naive solution -------------
/**
 *
 * @param {Array} arr
 */
function second(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

// console.log(second([-3, -2, -1, 0, 1, 2, 3]));

/**
 * 
 * @param {Array} arr 
 */
function practice(arr) {
  let left = 0;
  let right = arr.length - 1;
  // if this w as <= then there would situation like 0-0 and it's 
  // giong to return that as valid pair, which we don't want that
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
  // i like to explictily write it down in here
  return undefined;
}

console.log(practice([-3, -2, -1, 0, 1, 2, 3]));