function numDistinct(s, t) {
    const m = s.length;
    const n = t.length;
    
    // Create a 2D DP array with (m+1) x (n+1)
    const dp = Array(m + 1).fill(0).map(() => Array(n + 1).fill(0));

    // Base case: An empty t can be formed from any prefix of s in exactly one way
    for (let i = 0; i <= m; i++) {
        dp[i][0] = 1;
    }

    // Fill the DP table
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (s[i - 1] === t[j - 1]) {
                // Include the character or exclude it
                dp[i][j] = dp[i - 1][j] + dp[i - 1][j - 1];
            } else {
                // Exclude the character
                dp[i][j] = dp[i - 1][j];
            }
        }
    }

    // The answer is in dp[m][n]
    return dp[m][n];
}

// Example usage:
console.log(numDistinct("rabbbit", "rabbit")); // Output: 3
console.log(numDistinct("babgbag", "bag")); // Output: 5