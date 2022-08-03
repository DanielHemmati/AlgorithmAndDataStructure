#include <iostream>
using namespace std;

int fibo(int n) {
  if (n <= 1) {
    return n;
  }

  return fibo(n - 2) + fibo(n - 1);
}

int fiboWithLoop(int n) {
  if (n <= 1) return n;
  int t1 = 0;
  int t2 = 1;
  int sum = 0;

  for (int i = 1; i <= n; ++i) {
    sum = t1 + t2;
    // if you move the place of the next two statment
    // you will get two different result
    t1 = t2;
    t2 = sum;
  }
  return sum;
}

// fibo wih memo
int F[10];
int foboMemo(int n) {
  if (n <= 1) {
    F[n] = n;
    return n;
  } else {
    if (F[n - 2] == -1) {
      F[n - 2] = foboMemo(n - 2);
    }
    if (F[n - 1] == -1) {
      F[n - 1] = foboMemo(n - 1);
    }
    F[n] = F[n - 2] + F[n - 1];
    return F[n - 2] + F[n - 1];
  }
}

int main() {
  // cout << fibo(7) << endl;
  // cout << fiboWithLoop(7) << endl;
  for (int i = 0; i < 10; i++) {
    F[i] = -1;
  }
  cout << foboMemo(3) << endl;
  return 0;
}
