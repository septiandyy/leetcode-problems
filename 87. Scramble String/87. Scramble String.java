class Solution {
    public boolean isScramble(String s1, String s2) {
        if (s1.equals(s2)) return true;
        if (s1.length() != s2.length()) return false;
        
        int n = s1.length();
        boolean[][][] dp = new boolean[n][n][n + 1];
        
        // Initialize for substrings of length 1
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n; j++) {
                if (s1.charAt(i) == s2.charAt(j)) {
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