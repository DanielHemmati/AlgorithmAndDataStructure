const swap = (arr, i1, i2) => ([arr[i1], arr[i2]] = [arr[i2], arr[i1]]);

/**
 *
 * @param {Array} arr
 */
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      // console.log(arr, arr[j], arr[minIndex]);
      // console.log(i, j);
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (i !== minIndex) {
      console.log("swap happened");
      console.log(
        `i=${i} minIndex=${minIndex} arr[i]=${arr[i]} arr[minIndex]=${arr[minIndex]}`
      );
      swap(arr, minIndex, i);
    }
  }
  return arr;
}

let a = [1, 2, 100, 3, 99, 200, 4, 5];
console.log(selectionSort(a));
