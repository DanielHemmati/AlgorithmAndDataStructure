/*
 * Write a function called maxSubarraySum which accepts
 * an array of integers and a number called n. The function
 * should calculate the maximum sum of n consecutive
 * elements in the array.
 * this doesn't have to be sorted
 */

// big O(n^2)
// imagine if we had arr of 1m item and we had to
// sum of 100,000 digits of the array each time. ouch
function naiveSol(arr, num) {
  if (num > arr.length) {
    return null;
  }
  var max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

// console.log(naiveSol([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));

/**
 *
 * @param {Array} arr
 * @param {number} num
 */
// O(n)
function slidingWindow(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (num > arr.length) return null;

  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}
// let a = [3, 6, 9, 12, 1, 8, 5, 6, 3];
// let b = 3;
// console.log(slidingWindow(a, b));

/**
 *
 * @param {Array} arr
 * @param {Number} num
 */
function elegant(arr, num) {
  let currSum = 0;
  let maxSumSeen = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    currSum += arr[i];
    console.log(`first sum ${currSum}`);

    if (i >= num - 1) {
      maxSumSeen = Math.max(maxSumSeen, currSum);
      console.log(`currSum before = ${currSum}`);

      currSum -= arr[i - (num - 1)];
      console.log(`currSum after = ${currSum}`);
    }
  }
  return maxSumSeen;
}

let a = [3, 6, 9, 12, 1, 8, 5, 6, 3];
let b = 3;
// console.log(dani(a, b));

/**
 *
 * @param {Array} arr
 * @param {number} num
 */
function practice(arr, num) {
  let currSum = 0;
  let maxSum = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    currSum += arr[i];
    if (i >= num - 1) {
      maxSum = Math.max(currSum, maxSum);
      // really nice love this 
      currSum -= arr[i - (num - 1)];
    }
  }
}

console.log(practice(a, b));
