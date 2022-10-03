const swap = (arr, i1, i2) => ([arr[i1], arr[i2]] = [arr[i2], arr[i1]]);

/**
 * 
 * 
 * @param {Array} arr 
 * @param {number} start 
 * @param {number} end 
 * @return index of the pivot
 */
function pivot(arr, start = 0, end = arr.length - 1) {
  let pivot = arr[start];
  let swapIndex = start;

for (let i = start + 1; i <= end; i++){
    if (pivot > arr[i]) {
      swapIndex++;
      swap(arr, swapIndex, i);
    }
  }

  swap(arr, start, swapIndex);
  return swapIndex;
}

// console.log(pivot([4, 8, 2, 1, 5, 7, 6, 3]));

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    // left 
    quickSort(arr, left, pivotIndex - 1);
    // right
    quickSort(arr, pivotIndex+1, right);
  }
  return arr

}
console.log(quickSort([4, 8, 2, 1, 5, 7, 6, 3]));