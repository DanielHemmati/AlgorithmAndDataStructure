
/**
 *
 * @param {Array} arr
 * bubble sort with less O(n) swap
 */
function bubbleSort(arr) {
  let pass = 0;
  for (let i = arr.length; i > 0; i--) {
    pass += 1;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
    if (pass >= 1) break; // b/c we want the big one on first pass
  }
  return arr;
}

let b = [200, 1, 2, 3, 4, 5];
// console.log(bubbleSort(a));

const swap = (arr, i1, i2) => ([arr[i1], arr[i2]] = [arr[i2], arr[i1]]);
/**
 *
 * @param {Array} arr
 */
function selectionSortButForBigOneFirst(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    let maxIndex = i;
    for (let j = 0; j < arr.length; j++) {
      console.log(arr, arr[j], arr[maxIndex]);
      if (arr[j] > arr[maxIndex]) {
        maxIndex = j;
      }
    }
    console.log("swap happened");
    swap(arr, maxIndex, i);
  }
  return arr;
}

let a = [1, 5, 100, 3, 99, 200, 4, 2];
console.log(selectionSortButForBigOneFirst(a));
