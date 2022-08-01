#include <iostream>
using namespace std;

int factorial(int n) {
  if (n < 0) {
    return 1;
  } else {
    return factorial(n - 1) * n;
  }
}

int factInteration(int n) {
  int res = 1;
  for (int i = 1; i <= n; i++) {
    res *= i;
  }
  return res;
}

int main() {
  int a = 5;
  cout << factorial(-1) << endl;
  // cout << factInteration(a) << endl;
  return 0;
}