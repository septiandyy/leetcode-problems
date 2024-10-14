public class Solution {
    public int NumDecodings(string s) {
        int n = s.Length;
        if (n == 0 || s[0] == '0') return 0;
        
        int[] dp = new int[n + 1];
        dp[0] = 1;
        dp[1] = 1;
        
        for (int i = 2; i <= n; i++) {
            int oneDigit = s[i-1] - '0';
            int twoDigits = (s[i-2] - '0') * 10 + oneDigit;
            
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