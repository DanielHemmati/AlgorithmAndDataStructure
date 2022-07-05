#include <stdio.h>
#include <stdlib.h>

// int main() {
//   int a = 10;
//   int *p;
//   p = &a;

//   printf("%p\n", p);
//   // printf("%d\n", a);
//   if (a == *p) {
//     printf("yes we are the same\n");
//   }

//   // int *p;
//   // p = (int *)malloc(5 * sizeof(int));
//   // printf("%d\n", *p);

//   return 0;
// }

int main() {
  int var = 5;
  printf("var: %d\n", var);
  printf("address of var: %p", &var);
  
  return 0;
}
