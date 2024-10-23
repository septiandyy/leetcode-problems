function numDistinct(s: string, t: string): number {
    const m = s.length, n = t.length;
    const dp: number[][] = Array(m + 1).fill(0)
        .map(() => Array(n + 1).fill(0));
    
    // Empty string is a subsequence of empty string once
    for (let i = 0; i <= m; i++)
        dp[i][0] = 1;
    
    // Fill dp table
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            dp[i][j] = dp[i-1][j];
            if (s[i-1] === t[j-1])
                dp[i][j] += dp[i-1][j-1];
                
            // Handle potential overflow
            dp[i][j] = Math.min(dp[i][j], 2147483647);
        }
    }
    
    return dp[m][n];
}