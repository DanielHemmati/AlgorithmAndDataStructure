#include <iostream>

using namespace std;

void swap (int *x, int *y){
  int temp;
  temp = *x;
  *x = *y;
  *y = temp;
}

int main() {
  int a, b;
  a = 20;
  b = 30;
  swap(&a, &b);

  cout << "a=" << a << " b=" << b << "\n";
  return 0;
}
