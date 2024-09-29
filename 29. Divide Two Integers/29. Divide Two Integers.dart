class Solution {
  int divide(int dividend, int divisor) {
    if (dividend == -2147483648 && divisor == -1) return 2147483647;
    
    int dvd = dividend.abs();
    int dvs = divisor.abs();
    int sign = (dividend > 0) ^ (divisor > 0) ? -1 : 1;
    int quotient = 0;
    
    while (dvd >= dvs) {
      int temp = dvs, multiple = 1;
      while (dvd >= (temp << 1)) {
        temp <<= 1;
        multiple <<= 1;
      }
      dvd -= temp;
      quotient += multiple;
    }
    
    return sign * quotient;
  }
}