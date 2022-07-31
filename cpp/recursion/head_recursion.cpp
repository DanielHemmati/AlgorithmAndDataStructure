#include <iostream>
using namespace std;

void fun(int n) {
  // for (int i = 1; i < n; i++){
  //   cout << i << " ";
  // }
  /* -------------------------------------------------------------------------- */
  /*                               with while loop                              */
  /* -------------------------------------------------------------------------- */
  int i = 1;
  while (i <= n){
    cout << i << " ";
    i++;
  }
}

int main() {
  int a = 3;
  fun(a);
  return 0;
}
