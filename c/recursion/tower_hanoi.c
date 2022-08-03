// really interesting love it
#include <stdio.h>

// watch the video again, if you don't remember

// n is the number of disk
// A,B,C is tower number
void TOH(int n, int A, int B, int C) {
  if (n > 0) {
    TOH(n - 1, A, C, B);  // this is from A(source) to B(destination) using C(as helper, auxiliary)
    printf("from %d to %d\n", A, C);
    TOH(n - 1, B, A, C);
  }
}

int main() {
  TOH(3, 1, 2, 3);
  return 0;
}
