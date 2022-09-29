/**
 *
 * @param {Array} arr
 */
function bubbleSort(arr) {
  let noSwap;
  for (let i = arr.length; i > 0; i--) {
    noSwap = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwap = false;
      }
    }
    if (noSwap) break;
  }
  console.log(count);
  return arr;
}

let a = [1, 5, 100, 3, 99, 200, 4, 2];
let b = [1, 2, 3, 8, 5, 6, 7];
console.log(bubbleSort(b));
