#include <stdio.h>

typedef struct {
  int a[20];
  int size;
  int length;
} array;

void display(array arr) {
  int i;
  for (i = 0; i < arr.length; i++) {
    printf("%d ", arr.a[i]);
  }
}

void Insert(array *arr, int index, int x) {
  int i;
  if (index >= 0 && index <= arr->length) {
    for (i = arr->length; i > index; i--) {
      arr->a[i] = arr->a[i - 1];
    }
    arr->a[index] = x;
    arr->length++;
  }
}

int main() {
  array arr = {{1, 2, 3, 4, 5, 6, 7}, 20, 5};
  Insert(&arr, 0, 20);
  display(arr);
  return 0;
}
