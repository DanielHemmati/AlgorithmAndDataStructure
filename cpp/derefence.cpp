#include <iostream>
using namespace std;

int main() {
  int x = 5;
  int *p = &x;

  x = *p + 5;
  cout << x << "\n";
  return 0;
}
