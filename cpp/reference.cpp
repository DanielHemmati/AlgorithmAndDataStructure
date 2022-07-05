#include <iostream>

using namespace std;

int main() {
  int a = 10;
  int &r = a;

  cout << a << endl;
  r++;
  if (r == a) {
    cout << "yes we are the same"
         << "\n";
  }

  return 0;
}