class Solution {
  bool isScramble(String s1, String s2) {
    if (s1 == s2) return true;
    if (s1.length != s2.length) return false;
    
    int n = s1.length;
    List<List<List<bool>>> dp = List.generate(
      n,
      (_) => List.generate(
        n,
        (_) => List.filled(n + 1, false),
      ),
    );
    
    // Initialize for substrings of length 1
    for (int i = 0; i < n; i++) {
      for (int j = 0; j < n; j++) {
        if (s1[i] == s2[j]) {
          dp[i][j][1] = true;
        }
      }
    }
    
    // Build up the dp table
    for (int len = 2; len <= n; len++) {
      for (int i = 0; i <= n - len; i++) {
        for (int j = 0; j <= n - len; j++) {
          for (int k = 1; k < len; k++) {
            if ((dp[i][j][k] && dp[i+k][j+k][len-k]) || 
                (dp[i][j+len-k][k] && dp[i+k][j][len-k])) {
              dp[i][j][len] = true;
              break;
            }
          }
        }
      }
    }
    
    return dp[0][0][n];
  }
}