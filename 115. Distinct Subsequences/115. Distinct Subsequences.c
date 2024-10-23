int numDistinct(char* s, char* t) {
    int m = strlen(s), n = strlen(t);
    unsigned long long dp[1001][1001] = {0};
    
    // Empty string is a subsequence of empty string once
    for (int i = 0; i <= m; i++)
        dp[i][0] = 1;
    
    // Fill dp table
    for (int i = 1; i <= m; i++) {
        for (int j = 1; j <= n; j++) {
            dp[i][j] = dp[i-1][j];
            if (s[i-1] == t[j-1])
                dp[i][j] += dp[i-1][j-1];
        }
    }
    
    return dp[m][n];
}