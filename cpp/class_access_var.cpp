#include <iostream>

using namespace std;
class Myclass {
 public:
  static int i;
};

int Myclass::i = 10;

class YourClass {
 public:
  void doSomething() {
    Myclass::i = 10;  // This is how you access static member variables
  }
};

int main() {
  YourClass obj;
  obj.doSomething();
  return 0;
}