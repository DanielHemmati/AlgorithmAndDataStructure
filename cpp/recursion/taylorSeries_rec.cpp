#include <iostream>
using namespace std;

double taylor(int x, int n) {
  static double p = 1;  // power
  static double f = 1;  // factorial
  double r;                // hold the value of taylor

  if (n == 0) {
    return 1;
  }
  r = taylor(x, n - 1);
  p = p * x;
  f = f * n;
  return r + p / f;
}

int main() {
  cout << taylor(1, 10) << endl;
  return 0;
}
