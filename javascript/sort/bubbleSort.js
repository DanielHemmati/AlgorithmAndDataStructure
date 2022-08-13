// let a = ["daniel hemmati", "shahin Hemmati", "mina sabzian"];

// a.sort((a, b) => a.length - b.length);
// console.log(a);
// console.log(a.map(item => item.length));

/**
 *
 * @param {array} arr
 */
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// console.log(bubbleSort(a));

const swap = (arr, i1, i2) => ([arr[i1], arr[i2]] = [arr[i2], arr[i1]]);
/**
 *
 * @param {Array} arr
 */
function improveBubbleSort(arr) {
  let noSwap; // for when our array is nearly sorted
  for (let i = arr.length; i > 0; i--) {
    noSwap = true;
    for (let j = 0; j < i - 1; j++) {
      // i - 1 here or write in arr.length - 1
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
        noSwap = false;
      }
    }
    if (noSwap) break;
  }
  return arr;
}

let a = [1, 5, 100, 3, 99, 200, 4, 2];
let b = [1, 2, 3, 8, 5, 6, 7];
console.log(improveBubbleSort(b));
