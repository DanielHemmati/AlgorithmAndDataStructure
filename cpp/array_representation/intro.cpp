#include <iostream>
using namespace std;

#define length(a) (sizeof(a)/sizeof(a[0]))

int main() {
  int a[5];

  for (int i = 0; i < length(a); i++){
    cout << &a[i] << endl;
  }

    return 0;
}
