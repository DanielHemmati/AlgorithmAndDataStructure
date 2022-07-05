#include <iostream>

using namespace std;

class Rec {
 private:
  int length;
  int breadth;

 public:
  // this two are constructors 
  // Rec() { length = breadth = 1; }// this is the deafult if we don't set it ourself
  Rec(int l, int b); 

  // this two are facilitators fun(because they do some operation in private vars)
  int area();
  int perimeter();

  // this two are accessor function, setter and getters
  int getLength() { return length; }; //getter 
  void setLength(int l) { //setter
    length = l;
  };
  
  // this is a destructor funtion
  ~Rec(); // if you had some memroy allocation inside of this class, you have to call the class with ~ and no paramter. it works like free() in c
};

Rec::Rec(int l, int b){
  length = l;
  breadth = b;
}

int Rec::area() {
  return length * breadth;
}

int Rec::perimeter() {
  return 2 * (length + breadth);
}

Rec::~Rec() { // this will destroy the object after we are done with object
  // we don't have anything do in here
} 

int main() {
  Rec r(10, 5);
  cout << r.area() << endl;
  cout << r.perimeter() << endl;
  r.setLength(300);
  cout << r.getLength() << endl;
  return 0;
}
