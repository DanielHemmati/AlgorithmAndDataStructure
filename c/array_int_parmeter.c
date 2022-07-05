#include <stdio.h>

struct Test {
  int A[5];
  int n;
};

// int fun(struct Test t){
//   t.A[0] = 20;
//   t.A[1] = 21;
//   t.A[2] = 22;
//   t.A[3] = 23;
//   t.A[4] = 24;
//   for (int i = 0; i < sizeof(t.A) / sizeof(int); i++){
//     printf("%d\n", t.A[i]);
//   }
// }
int fun(struct Test *t){
  t->A[0] = 20;
  t->A[1] = 21;
  t->A[2] = 22;
  t->A[3] = 23;
  t->A[4] = 24;
  for (int i = 0; i < sizeof(t->A) / sizeof(int); i++){
    printf("%d\n", t->A[i]);
  }
}

int main() {
  struct Test t = {{2, 4, 6, 8, 10}, 5};
  fun(&t);
  printf("after the looop \n");
  printf("-------------------");
  for (int i = 0; i < sizeof(t.A) / sizeof(int);i++){
    printf("%d\n", t.A[i]);
  }
    return 0;
}
