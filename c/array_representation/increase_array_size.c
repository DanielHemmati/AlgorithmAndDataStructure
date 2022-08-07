#include <stdio.h>
#include <stdlib.h>


int main() {
  int *p;
  int *q;

  p = (int *)malloc(5 * sizeof(int));
  p[0] = 3;
  p[1] = 2;
  p[2] = 3;
  p[3] = 4;
  p[4] = 5;

  for (int i = 0; i < 5; i++){
    printf("%d \n", p[i]);
  }

  q = (int *)malloc(10 * sizeof(int));
  free(p);// free p
  p = q; // p right now is q
  q = NULL;// we don't need q any more so attach it to the NULL

  return 0;
}
