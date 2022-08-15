/**
 *
 * @param {Array} arr1
 * @param {Array} arr2
 * @returns
 */
function merge(arr1, arr2) {
  let result = [];
  let i = 0; // poiner for arr1
  let j = 0; // pointer for arr2

  while (i < arr1.length && j < arr2.length) {
    if (arr2[j] > arr1[i]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }

  // if one array have bigger length, add the remaning the result
  // we know what is the value of i and j b/c bot i and j are in
  // the local stack. that's really cool
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
}

// console.log(merge([1, 10, 50], [2, 14, 99, 100]));

/**
 *
 * @param {Array} arr
 */
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  let middle = Math.floor(arr.length / 2);
  let left = mergeSort(arr.slice(0, middle));
  let right = mergeSort(arr.slice(middle));
  return merge(left, right);
}

let a = [10, 24, 73, 76];
console.log(mergeSort(a));
