#include <iostream>
#include <vector>

int sum(int n){
  if (n > 0) {
    return sum(n - 1) + n;
  }
  return 0;
}

int main() {
  int a = 5;
  std::cout << sum(a) << std::endl;
  return 0;
}
