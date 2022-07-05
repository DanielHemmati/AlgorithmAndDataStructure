#include <iostream>

class Rec {
 private:  // you can also removes it
  int length;
  int breadth;

 public:  // this should be in here
  Rec(int l, int b) {// this is the constructor
    length = l;
    breadth = b;
    printf("%d %d\n", length, breadth);
  }

  int area() {
    std::cout << "area is " << length * breadth << std::endl;
    return length * breadth;
  }

  void changeLenth(int l) {
    length = l;
    std::cout << "length is " << length << std::endl;
  }
};

int main() {
  Rec r(10, 20);
  // r.initialize(10, 20);
  r.area();
  r.changeLenth(2000);
  return 0;
}
