#include <iostream>
using namespace std;

int factorial(int n) {
  if (n < 0) {
    return 1;
  } else {
    return factorial(n - 1) * n;
  }
}

int combination(int n, int r) {
  int t1, t2, t3;
  t1 = factorial(n);
  t2 = factorial(r);
  t3 = factorial(n - r);
  return t1 / t2 * t3;
}

// using pascal triangle, see the video if you don't remmber
int combinationPascal(int n, int r) {
  if (n == 0 || n == r) {
    return 1;
  } else {
    return combinationPascal(n - 1, r - 1) + combinationPascal(n - 1, r);
  }
}

int main() {
  // cout << combination(5, 3) << endl;
  cout << combinationPascal(5, 3) << endl;
  return 0;
}
