#include <stdio.h>
#include <stdlib.h>

int main() {
  int *p;
  p = (int *)malloc(5 * sizeof(int));
  printf("%ld\n", sizeof(p));
  printf("%ld\n", sizeof(int));
  // for (int i = 1; i < 10; i++) {
  //   printf("%d\n", i);
  // }
  return 0;
}
