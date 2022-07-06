#include <stdio.h>
#include <stdlib.h>

int main() {
  int *p;
  p = (int *)malloc(5 * sizeof(int));
  printf("%ld\n", sizeof(p));
  return 0;
}
