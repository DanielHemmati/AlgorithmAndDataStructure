#include <stdio.h>

void swap(int *x, int *y) {
  int temp;
  temp = *x;
  *x = *y;
  *y = temp;
}

int main() {
  int a, b;
  a = 20;
  b = 30;
  swap(&a, &b); 
  printf("a=%d b=%d", a, b);


  return 0;
}
