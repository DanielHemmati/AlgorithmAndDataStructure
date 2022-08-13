const swap = (arr, i1, i2) => ([arr[i1], arr[i2]] = [arr[i2], arr[i1]]);

/**
 *
 * @param {Array} arr
 */
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++){
    for (let j = 0; j < arr.length; j++){
      console.log(arr, arr[j], arr[j + 1]);
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1);
      }
    }
  }
  return arr;
}


let a = [1, 5, 100, 3, 99, 200, 4, 2];
let b = [1, 2, 3, 4, 9, 5, 6, 7, 8];
console.log(bubbleSort(a));
