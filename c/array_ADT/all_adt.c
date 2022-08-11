#include <math.h>
#include <stdio.h>

// static array in c
typedef struct {
  int a[20];
  int size;
  int length;
} array;

void Display(array arr) {
  for (int i = 0; i < arr.length; i++) {
    printf("%d ", arr.a[i]);
  }
}

// *arr b/c we want to change the contnet of an array
// append will put item at the end of an array
void Append(array *arr, int x) {
  if (arr->length < arr->size) {
    arr->a[arr->length++] = x;
    // or remove ++ and write arr->length++;
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

int delete (array *arr, int index) {
  int x = 0;
  int i;
  if (index >= 0 && index <= arr->length) {
    x = arr->a[index];
    for (i = index; i < arr->length - 1; i++) {
      arr->a[i] = arr->a[i + 1];
    }
    arr->length--;
    return x;
  }
  return 0;
}

void swap(int *x, int *y) {
  int temp = *x;
  *x = *y;
  *y = temp;
}

int linearSearch(array *arr, int key) {
  int i;
  for (i = 0; i < arr->length; i++) {
    if (key == arr->a[i]) {
      swap(&arr->a[i], &arr->a[i - 1]);
      return i - 1;
    }
  }
  return -1;
}

int binarySearchIter(array arr, int key) {
  int low = 0;
  int high = arr.length - 1;
  while (low <= high) {
    int middle = (low + high) / 2;

    if (key == arr.a[middle]) {
      return middle;
    } else if (key < arr.a[middle]) {
      high = middle - 1;
    } else {
      low = middle + 1;
    }
  }
  return -1;
}

int RecBinarySearch(int a[], int low, int high, int key){
  if (low <= high){
    int middle = (low + high) / 2;

    if (key == a[middle]){
      return middle;
    } else if (key < a[middle]){
      return RecBinarySearch(a, low, middle - 1, key);
    } else {
      return RecBinarySearch(a, middle + 1, high, key);
    }
  }
  return -1;
}

int main() {
  array arr = {{1, 2, 3, 4, 5, 6, 7}, 20, 7};
  // Append(&arr, 10);
  // Insert(&arr, 0, 20);
  // printf("%d \n", delete (&arr, 0));  // put in print if you want return values
  // printf("%d \n", linearSearch(&arr, 5));
  // printf("%d\n", binarySearchIter(arr, 12));
  printf("%d\n", RecBinarySearch(arr.a, 0, arr.length, 5));
  return 0;
}
