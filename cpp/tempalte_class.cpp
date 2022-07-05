#include <iostream>

using namespace std;

// when you write template <calss T> it will only works 
// on the body of this class, you have to write on top of 
// the constructors also. basically we want our data types
// to be whatever we want
template <class T> 
class Arthi {
 private:
  T a;
  T b;

 public:
  Arthi(T a, T b);
  T add();
  T sub();
};

template <class T>
Arthi<T>::Arthi(T a1, T b1) {// why we use Arthi<T>? see the main func
  // two of writig it? idk which one is better
  this->a = a1;
  this->b = b1;
  // a = a1;
  // b = b1;
  cout
      << "a is " << a << endl;
}

template<class T>
T Arthi<T>::add() { 
  T c;
  c = a + b;
  return c;
}

template<class T>
T Arthi<T>::sub() {
  T c;
  c = a - b;
  return c;
}

int main() {
  Arthi<int> ar(10, 5); // when you put int between <> all of the code above which have T will be replace by int
  // cout << ar.add() << endl;
  Arthi<float> floatRec(10.2, 20.2);
  cout << floatRec.add() << endl;
  return 0;
}
