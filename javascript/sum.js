
function addUpTo(n) {
  let res = 0;
  for (let i = 0; i <= n; i++){
    res += i;
  }
  return res;
}

// let t1 = performance.now();
console.time('a');
addUpTo(1000000000)
console.timeEnd('a');
// let t2 = performance.now();
// console.log(`time elapsed: ${(t2 - t1) / 1000} in second`);
