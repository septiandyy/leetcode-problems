class Solution {
  int numDecodings(String s) {
    int n = s.length;
    if (n == 0 || s[0] == '0') return 0;
    
    List<int> dp = List.filled(n + 1, 0);
    dp[0] = 1;
    dp[1] = 1;
    
    for (int i = 2; i <= n; i++) {
      int oneDigit = int.parse(s[i-1]);
      int twoDigits = int.parse(s.substring(i-2, i));
      
      if (oneDigit >= 1) {
        dp[i] += dp[i-1];
      }
      if (twoDigits >= 10 && twoDigits <= 26) {
        dp[i] += dp[i-2];
      }
    }
    
    return dp[n];
  }
}