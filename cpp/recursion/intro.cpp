// watch abuld bari first video about tracing recursion
#include <iostream>
using namespace std;

void fun1(int n) {
  if (n > 0) {
    cout << n << endl;
    fun1(n - 1);
    fun1(n - 1);
  }
}

int main() {
  int x = 3;
  fun1(3);
  return 0;
}
