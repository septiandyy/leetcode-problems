bool isMatch(char* s, char* p) {
    int m = strlen(s), n = strlen(p);
    bool dp[2001][2001] = {false};
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