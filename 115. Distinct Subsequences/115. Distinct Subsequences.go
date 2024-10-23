func numDistinct(s string, t string) int {
    m, n := len(s), len(t)
    dp := make([][]uint64, m+1)
    for i := range dp {
        dp[i] = make([]uint64, n+1)
    }
    
    // Empty string is a subsequence of empty string once
    for i := 0; i <= m; i++ {
        dp[i][0] = 1
    }
    
    // Fill dp table
    for i := 1; i <= m; i++ {
        for j := 1; j <= n; j++ {
            dp[i][j] = dp[i-1][j]
            if s[i-1] == t[j-1] {
                dp[i][j] += dp[i-1][j-1]
            }
        }
    }
    
    return int(dp[m][n])
}