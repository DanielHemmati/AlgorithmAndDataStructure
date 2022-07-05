#include <stdio.h>

struct Rec {
  int length;
  int breadth;
};

void initialize(struct Rec *r, int a, int b) {
  r->length = a;
  r->breadth = b;
  printf("%d %d\n", r->length, r->breadth);
}

int area(struct Rec r) {
  printf("%d\n", r.length * r.breadth);
  return r.length * r.breadth;
}

void changeLenth(struct Rec *r, int d){
  r->length = d;
  printf("r->length=%d\n", r->length);
}

int main() {
  struct Rec r;
  initialize(&r, 10, 20);
  printf("r->length=%d r->breadth=%d\n", r.length, r.breadth);
  area(r);
  changeLenth(&r, 20000);
  return 0;
}
