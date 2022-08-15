/**
 *
 * @param {Array} arr
 */
function insertionSort(arr) {
  for (var i = 1; i < arr.length; i++) {
    let currentVal = arr[i];

    j = i - 1;
    while (j >= 0 && arr[j] > currentVal) {
      arr[j + 1] = arr[j];
      j--;
    }
    arr[j + 1] = currentVal;
  }
  return arr;
}

let a = [1, 5, 100, 3, 99, 200, 4, 2];
console.log(insertionSort(a));
