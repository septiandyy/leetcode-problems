public class Solution {
    public int NumDistinct(string s, string t) {
        int m = s.Length, n = t.Length;
        uint[,] dp = new uint[m + 1, n + 1];
        
        // Empty string is a subsequence of empty string once
        for (int i = 0; i <= m; i++)
            dp[i, 0] = 1;
        
        // Fill dp table
        for (int i = 1; i <= m; i++) {
            for (int j = 1; j <= n; j++) {
                dp[i, j] = dp[i-1, j];
                if (s[i-1] == t[j-1])
                    dp[i, j] += dp[i-1, j-1];
            }
        }
        
        return (int)dp[m, n];
    }
}