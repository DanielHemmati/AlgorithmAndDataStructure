#include <iostream>
#include <algorithm>
#include <vector>
using namespace std;

int main() {
  vector<int> v = {4, 2, 5, 3, 5, 8, 3};
  sort(v.begin(), v.end());
  for (int i: v){
    cout << "i = " << i << endl;
  }
  return 0;
}
