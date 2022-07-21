#include <stdio.h>

int sum(int n) {
  int res = 0;
  for (int i = 0; i <= n; i++) {
    res += i;
  }
  return res;
}

int main() {
  sum(1000000000);
  return 0;
}
