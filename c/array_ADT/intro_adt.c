#include <stdio.h>
#include <stdlib.h>

typedef struct {
  int *a;
  int size;
  int length;
} array;

void Display(array arr) {
  int i;
  printf("\nElements are \n");
  for (i = 0; i < arr.length; i++) {
    printf("%d ", arr.a[i]);
  }
}

int main() {
  array arr;
  int n, i;
  printf("Enter the size of an array");
  scanf("%d", &arr.size);

  arr.a = (int *)malloc(arr.size * sizeof(int));
  arr.length = 0;

  printf("enter number of numbers: ");
  scanf("%d", &n);

  printf("enter all the elements");
  for (i = 0; i < n; i++) {
    scanf("%d", &arr.a[i]);
  }
  arr.length = n;

  Display(arr);
  printf("\n");
  printf("the current size %d\n", arr.size);
  printf("\n");
  printf("the current length %d\n", arr.length);
  return 0;
}
