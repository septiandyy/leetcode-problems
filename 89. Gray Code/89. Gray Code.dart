class Solution {
  List<int> grayCode(int n) {
    int size = 1 << n;  // 2^n
    List<int> result = List<int>.filled(size, 0);
    
    for (int i = 0; i < size; i++) {
      result[i] = i ^ (i >> 1);
    }
    
    return result;
  }
}