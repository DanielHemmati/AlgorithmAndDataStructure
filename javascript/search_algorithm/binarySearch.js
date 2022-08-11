/**
 *
 * @param {array} arr
 * @param {number} item
 */
function binarySearch(arr, item) {
  let low = 0;
  let high = arr.length - 1;
  while (low <= high) {
    let middle = Math.floor((low + high) / 2);

    console.log(low, middle, high);
    if (arr[middle] === item) {
      return middle;
    } else if (item < arr[middle]) {
      high = middle - 1;
    } else {
      low = middle + 1;
    }
  }
  return -1;
}

let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(a.length)
console.log(binarySearch(a, 6));
