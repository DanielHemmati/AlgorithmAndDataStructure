/**
 *
 * @param {Array} arr
 * @param {number} min
 * @param {number} max
 */
function countingSort(arr, min, max) {
  const count = {};
  for (let i = min; i <= max; i++) {
    count[i] = 0;
  }

  for (let i = 0; i < arr.length; i++) {
    count[arr[i]] += 1;
  }

  const sortedArray = [];
  for (let i = min; i <= max; i++) {
    while (count[i] > 0) {
      sortedArray.push(i);
      count[i]--;
    }
  }
  console.log(sortedArray);
}

// console.log(countingSort([3, 6, 5, 5, 9], 3, 9));

/**
 * 
 * @param {Array} arr 
 */
function formalCountinSort(arr) {
  let output = Array(arr.length).fill(0);
  let count = Array(Math.max(...arr) + 1).fill(0);

  for (let i = 0; i < arr.length; i++){
    count[arr[i]] += 1;
  }
  
  for (let i = 1; i < count.length; i++){
    count[i] += count[i - 1];
  }

  // let i = arr.length - 1;
  // while (i >= 0) {
  //   let currentElement = arr[i];
  //   count[currentElement] -= 1;
  //   newPos = count[currentElement];
  //   output[newPos] = currentElement;
  //   i--;
  // }

  for (let i = arr.length - 1; i >= 0; i--){
    let currentElement = arr[i];
    count[currentElement] -= 1;
    newPos = count[currentElement];
    output[newPos] = currentElement;
  }

  return output;
}

let data = [4, 2, 2, 8, 3, 3, 1];
console.log(formalCountinSort(data));