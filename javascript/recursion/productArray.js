

/**
 * 
 * @param {Array} n 
 */
function productArray(n) {
  let res = 1;
  for (let i = 0; i < n.length; i++){
    res *= n[i];
  }
  return res;
}

// console.log(productArray(a))

/**
 * 
 * @param {Array} n 
 */
function productArrayRec(n) {
  if (n.length === 0) {
    return 1;
  } else {
    return n[0] * productArrayRec(n.slice(1));
  }
}

let a = [1, 2, 3, 4, 10];


console.log(productArrayRec(a))