#include <assert.h>
#include <stdio.h>
#include <stdlib.h>



int main() {
  int a = 109;

  int *ptr = &a;

  // printf("%d \n", *ptr);

  *ptr = 20;
  printf("%d \n", a);
  return 0;
}
