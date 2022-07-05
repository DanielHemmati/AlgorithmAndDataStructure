#include <iostream>

using namespace std;

int* fun(int arr[]){
  return arr[0];
}

int main() {
  cout << fun() << endl;
  return 0;
}
