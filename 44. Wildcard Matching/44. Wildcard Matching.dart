class Solution {
  bool isMatch(String s, String p) {
    int m = s.length, n = p.length;
    List<List<bool>> dp = List.generate(m + 1, (_) => List.filled(n + 1, false));
    dp[0][0] = true;
    
    for (int j = 1; j <= n && p[j-1] == '*'; j++) {
      dp[0][j] = true;
    }
    
    for (int i = 1; i <= m; i++) {
      for (int j = 1; j <= n; j++) {
        if (p[j-1] == '*') {
          dp[i][j] = dp[i][j-1] || dp[i-1][j];
        } else if (p[j-1] == '?' || s[i-1] == p[j-1]) {
          dp[i][j] = dp[i-1][j-1];
        }
      }
    }
    
    return dp[m][n];
  }
}