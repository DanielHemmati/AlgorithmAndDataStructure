
/**
 * 
 * @param {Array} arr 
 */
function collectOdd(arr) {
  let result = [];

  // i rather to write this outside
  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }

    helper(helper.slice(1));
  }
  helper(arr);

  return result;
}

/**
 * 
 * @param {Array} arr 
 */
function pureRecCollectOddValues(arr) {
  let result = [];
  if (arr.length === 0) {
    return result;
  }

  if (arr[0] % 2 !== 0) {
    result.push(arr[0]);
  }

  // result = result.concat(pureRecCollectOddValues(arr.slice(1)));
  result = [...result, ...pureRecCollectOddValues(arr.slice(1))]; // i wrote this 
  return result;
}

let a = [1, 2, 3, 4, 5, 6];
console.log(pureRecCollectOddValues(a));

