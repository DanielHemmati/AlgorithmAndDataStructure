#include <stdio.h>
// void changeLength(struct Rectangle *p);

struct Rectangle {
  int length;
  int breadth;
};

// void changeLength(struct Rectangle *p) {
//   printf("%d\n", p->length);
// }

// int area(struct Rectangle *r1) {
//   return r1->breadth * r1->length;
// }

// does have a problem void or int stuff 
int test(struct Rectangle *r2, int d) {
  r2->length = d;
  printf("%d %d\n", r2->breadth, r2->length);
}

int main() {
  struct Rectangle r = {10, 5};
  // printf("%d\n", area(&r));
  printf("%d\n", test(&r, 2000));
  return 0;
}
