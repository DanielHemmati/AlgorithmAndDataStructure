const swap = (arr, i1, i2) => ([arr[i1], arr[i2]] = [arr[i2], arr[i1]]);

/**
 *
 * @param {Array} arr
 */
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (i !== minIndex) {
      console.log(i, minIndex);
      console.log("swap is done");
      swap(arr, minIndex, i);
    }
  }
  return arr;
}

let a = [0, 2, 100, 3, 99, 200, 4, 5];
let b = [1, 2, 3];
let d = [3, 3, 1] ;
console.log(selectionSort(d));
