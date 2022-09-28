/**
 *
 * @param {Array} arr
 * @param {number} item
 */
function binarySearch(arr, item) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    let middle = Math.floor((low + high) / 2);
    let currentElement = arr[middle];

    if (currentElement === item) {
      return middle;
    }

    if (currentElement < item) {
      low = middle + 1;
    } else if (currentElement > item) {
      high = middle - 1;
    }
  }
  return -1;
}

let a = [1, 2, 3, 4, 5, 6];
// console.log(binarySearch(a, 2));

/**
 * 
 * @param {Array} arr
 * @param {number} item 
 * @param {number} low 
 * @param {number} high 
 */
function binarySearchRec(arr, item, low=0, high=(arr.length - 1)) {
  // if (low > high || !arr.length) {
  //   return -1;
  // } or we can write 👇
  if (arr.length === 1 && arr[0] != item) { // this is also nice
    return -1;
  }
  // console.log(high)
  let middle = Math.floor((low + high) / 2);
  let currentElement = arr[middle];

  if (currentElement === item) {
    return middle;
  }

  if (currentElement < item) {
    return binarySearchRec(arr, item, middle + 1, high);
  } else {
    return binarySearchRec(arr, item, low, middle - 1);
  }
}

console.log(binarySearchRec(a, 2, 0, a.length))
