#include <stdio.h>
#include <stdlib.h>

// here we have an dynamic array
typedef struct {
  int *a;
  int size;
  int length;
} array;

int main() {
  array arr;
  int n;
  printf("Enter the size of an array: ");
  scanf("%d", &arr.size);

  arr.a = (int *)malloc(arr.size * sizeof(int));
  arr.length = 0;

  // idk how to implement the default value in C
  // i want to n to be &size.size if the user didn't gave any input. but idk how
  printf("how much of this array u want to use use: ");
  scanf("%d", &n);
  arr.length = n;

  printf("now give me items: ");
  for (int i = 0; i < n; i++) {
    scanf("%d", &arr.a[i]);
  }

  printf("now let me show you the array");
  for (int i = 0; i < n; i++) {
    printf("%d ", arr.a[i]);
  }

  printf("\n");
  printf("the size the array is: %d\n", arr.size);
  printf("the length of the array is: %d\n", arr.length);

  return 0;
}
