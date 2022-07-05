#include <stdio.h>
#include <stdlib.h>

struct Rectangle {
  int length;
  int bredth;
};

// dynamic object in heap
int main() {
  struct Rectangle *p;
  // removed typecast 
  p = malloc(sizeof(struct Rectangle));

  p->bredth = 24;
  p->length = 3000000;
  printf("%d\n", p->bredth);
  printf("%d\n", p->length);
  return 0;
}

// we create the array
// int main() {
//   struct Rectangle r = {10, 5};
//   struct Rectangle *p = &r;

//   r.length = 23;
//   (*p).length = 25; // we don't write it like this, we don't like it
//   p->length = 30;
//   // printf("%d", r.length);
//   printf("%d", (*p).length);
//   return 0;
// }