class Solution {
  int mySqrt(int x) {
    if (x == 0 || x == 1) return x;
    
    int left = 1, right = x;
    while (left <= right) {
      int mid = left + (right - left) ~/ 2;
      if (mid * mid == x) return mid;
      if (mid * mid < x) left = mid + 1;
      else right = mid - 1;
    }
    return right;
  }
}