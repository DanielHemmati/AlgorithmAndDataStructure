#include <iostream>

using namespace std;
int main() {
  int *p;
  p = new int[5];
  cout << sizeof(p) << endl;
  return 0;
}
