// practice again

/**
 *
 * @param {Array} left
 * @param {Array} right
 */
function merge(left, right) {
  let result = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift()); //
    } else {
      result.push(right.shift());
    }
  }

  return [...result, ...left, ...right];
}

/**
 *
 * @param {Array} arr
 */
function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }
  let middle = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, middle));
  let right = mergeSort(arr.slice(middle));

  return merge(left, right);
}

console.log(mergeSort([5, 1, 8, 0, 2]));
