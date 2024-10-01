function isMatch(s: string, p: string): boolean {
    const m = s.length, n = p.length;
    const dp: boolean[][] = Array(m + 1).fill(null).map(() => Array(n + 1).fill(false));
    dp[0][0] = true;
    
    for (let j = 1; j <= n && p[j-1] === '*'; j++) {
        dp[0][j] = true;
    }
    
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (p[j-1] === '*') {
                dp[i][j] = dp[i][j-1] || dp[i-1][j];
            } else if (p[j-1] === '?' || s[i-1] === p[j-1]) {
                dp[i][j] = dp[i-1][j-1];
            }
        }
    }
    
    return dp[m][n];
}