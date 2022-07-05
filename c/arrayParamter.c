#include <stdio.h>
#include <stdlib.h>

// void fun(int A[], int n) {
//   A[0] = 25;
//   int i;
//   for (i = 0; i < n; i++) {
//     printf("%d \n", A[i]);
//   }
// }

// only * works in here
int *fun(int n) {
  int *p;
  p = (int *)malloc(n * sizeof(int));
  return p;
}

int main() {
  // int A[5] = {2, 4, 6, 8, 10};
  // int len = sizeof(A) / sizeof(int);

  int *A;
  A = fun(5);

  printf("%d\n", *A);
  return 0;
}
