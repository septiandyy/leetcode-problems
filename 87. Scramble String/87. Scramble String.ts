function isScramble(s1: string, s2: string): boolean {
    if (s1 === s2) return true;
    if (s1.length !== s2.length) return false;
    
    const n = s1.length;
    const dp: boolean[][][] = Array(n).fill(0).map(() => 
        Array(n).fill(0).map(() => Array(n + 1).fill(false))
    );
    
    // Initialize for substrings of length 1
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (s1[i] === s2[j]) {
                dp[i][j][1] = true;
            }
        }
    }
    
    // Build up the dp table
    for (let len = 2; len <= n; len++) {
        for (let i = 0; i <= n - len; i++) {
            for (let j = 0; j <= n - len; j++) {
                for (let k = 1; k < len; k++) {
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