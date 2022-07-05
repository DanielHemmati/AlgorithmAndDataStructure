#include <cstdlib>
#include <iostream>

using namespace std;

int main() {
  int* ptr = (int*)malloc(5 * sizeof(int));

  if (!ptr) {
    cout << "memory allocation failed"
         << "\n";
    exit(1);
  }

  cout << "init values ... " << endl
       << endl;

  for (int i = 0; i < 5; ++i) {
    ptr[i] = i * 2 + 1;
  }

  cout << ptr[1] << endl;
  cout << "init value again !?!?!" << endl;

  for (int i = 0; i < 5; ++i) {
    // another way to access array?? WTF?
    cout << *(ptr + i) << endl;
  }

  return 0;
}