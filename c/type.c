#include <stdio.h>
#include <time.h>

#define type_name(expr) \
    (_Generic((expr), \
              char                              \
              : "char", unsigned char           \
              : "unsigned char", signed char    \
              : "signed char", \ 
              short                             \
              : "short", unsigned short         \
              : "unsigned short", \
              int                               \
              : "int", unsigned int             \
              : "unsigned int", \
              long                              \
              : "long", unsigned long           \
              : "unsigned long", \
              long long                         \
              : "long long", unsigned long long \
              : "unsigned long long", \
              float                             \
              : "float", \
              double                            \
              : "double", \
              long double                       \
              : "long double", \
              void*                             \
              : "void*", \
              default                           \
              : "?"))
//
int main(void) {

  printf("%s i of type %s\n", "'a'", type_name('a'));
  printf("%d i of type %s\n", 42, type_name(42));

}
