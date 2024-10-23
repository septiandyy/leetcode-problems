class Solution {
  int numDistinct(String s, String t) {
    int m = s.length, n = t.length;
    List<List<int>> dp = List.generate(
        m + 1, (_) => List.filled(n + 1, 0, growable: false),
        growable: false);
    
    // Empty string is a subsequence of empty string once
    for (int i = 0; i <= m; i++)
      dp[i][0] = 1;
    
    // Fill dp table
    for (int i = 1; i <= m; i++) {
      for (int j = 1; j <= n; j++) {
        dp[i][j] = dp[i-1][j];
        if (s[i-1] == t[j-1])
          dp[i][j] = (dp[i][j] + dp[i-1][j-1]) % 1000000007;
      }
    }
    
    return dp[m][n];
  }
}