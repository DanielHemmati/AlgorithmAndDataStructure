function print(n) {
  if (n > 0) {
    print(n - 1);
    console.log(n);
  }
}


function call() {
  let a = 3;
  print(a);
}

call();