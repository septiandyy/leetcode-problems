class Solution {
  int reverse(int x) {
    int rev = 0;
    int sign = x < 0 ? -1 : 1;
    x = x.abs();
    
    while (x != 0) {
      int pop = x % 10;
      x ~/= 10;
      
      if (rev > 214748364 || (rev == 214748364 && pop > 7)) return 0;
      if (rev < -214748364 || (rev == -214748364 && pop < -8)) return 0;
      
      rev = rev * 10 + pop;
    }
    
    return sign * rev;
  }
}