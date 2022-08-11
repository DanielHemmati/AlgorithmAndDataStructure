#include <stdio.h>

// static array in c
typedef struct {
  int a[20];
  int size;
  int length;
} array;

int main() {
  array arr = {{1, 2, 3, 4, 5}, 20, 5};

  for (int i = 0; i < arr.length; i++) {
    printf("%d ", arr.a[i]);
  }
  return 0;
}
