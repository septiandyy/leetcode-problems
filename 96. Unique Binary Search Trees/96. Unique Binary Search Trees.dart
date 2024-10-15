class Solution {
  int numTrees(int n) {
    List<int> dp = List<int>.filled(n + 1, 0);
    dp[0] = dp[1] = 1;
    
    for (int i = 2; i <= n; i++) {
      for (int j = 0; j < i; j++) {
        dp[i] += dp[j] * dp[i - j - 1];
      }
    }
    
    return dp[n];
  }
}