#include <iostream>
#include <vector>
using namespace std;

int main() {
  vector<int> n = {
      1,
      2,
      3,
      4,
      5,
  };

  vector<int>::iterator iter;

  for (iter = n.begin(); iter != n.end(); iter++){
    cout << *iter << " ";
  }

    return 0;
}