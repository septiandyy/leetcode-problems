class Solution {
  String getPermutation(int n, int k) {
    List<int> factorial = List.filled(10, 1);
    List<int> nums = List.generate(n, (i) => i + 1);
    StringBuffer result = StringBuffer();
    
    for (int i = 1; i <= n; i++) {
      factorial[i] = factorial[i-1] * i;
    }
    
    k--;  // Convert to 0-based index
    
    for (int i = 0; i < n; i++) {
      int index = k ~/ factorial[n-1-i];
      result.write(nums[index].toString());
      nums.removeAt(index);
      k %= factorial[n-1-i];
    }
    
    return result.toString();
  }
}