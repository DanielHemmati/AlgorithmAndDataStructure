#include <stdio.h>

void printPairs(int n) {
  for (int i = 0; i <= n; i++){
    for (int j = 0; j <= n; j++){
      printf("%d %d\n", i, j);
    }
  }
}

int main() {
  printPairs(500);
  return 0;
}
