#include <iostream>
using namespace std;

double tayloWithLoop(int x, int n) {
  double s = 1;
  double numerator = 1;
  double denominator = 1;

  for (int i = 1; i <= n; i++){
    numerator *= x;
    denominator *= i;
    s += numerator / denominator;
  }
  return s;
}

// i don't like the student problem lol
double taylorRec(int x, int n) {
  static double s;
  if (n == 0) {
    return s;
  }
  s = 1 + x / n * s;
  return taylorRec(x, n - 1);
}

int main() {
  cout << tayloWithLoop(1, 10) << endl;
  return 0;
}
