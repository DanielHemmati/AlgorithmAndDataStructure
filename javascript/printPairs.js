
/**
 * 
 * @param {number} n 
 */
function printPairs(n) {
  for (let i = 0; i <= n; i++){
    for (let j = 0; j <= n; j++){
      console.log(i, j);
    }
  }
}

console.log(printPairs(500));
