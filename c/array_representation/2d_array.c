#include <stdio.h>
#include <stdlib.h>

int main() {
  int *b[3];
  b[0] = (int *)malloc(4 * sizeof(int));
  b[1] = (int *)malloc(4 * sizeof(int));
  b[2] = (int *)malloc(4 * sizeof(int));

  int **c; 
  c = (int **)malloc(3 * sizeof(int *));  // idk why double **
  c[0] = (int *)malloc(4 * sizeof(int));
  c[1] = (int *)malloc(4 * sizeof(int));
  c[2] = (int *)malloc(4 * sizeof(int));

  int a[3][4] = {{1, 2, 3, 4}, {2, 4, 6, 8}, {1, 3, 5, 7}};
  for (int i = 0; i < 3; i++){
    for (int j = 0; j < 4; j++){
      printf("%d ", a[i][j]);
    }
    printf("\n");
  }

    return 0;
}
