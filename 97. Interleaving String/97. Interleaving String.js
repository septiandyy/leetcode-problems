function isInterleave(s1, s2, s3) {
    const m = s1.length;
    const n = s2.length;
    
    if (s3.length !== m + n) {
        return false;
    }

    // Initialize DP table
    const dp = Array(n + 1).fill(false);
    dp[0] = true;

    // Fill the first row
    for (let j = 1; j <= n; j++) {
        dp[j] = dp[j - 1] && s2[j - 1] === s3[j - 1];
    }

    // Fill the rest of the table
    for (let i = 1; i <= m; i++) {
        dp[0] = dp[0] && s1[i - 1] === s3[i - 1];
        for (let j = 1; j <= n; j++) {
            dp[j] = (dp[j] && s1[i - 1] === s3[i + j - 1]) || 
                    (dp[j - 1] && s2[j - 1] === s3[i + j - 1]);
        }
    }

    return dp[n];
}

// Example usage:
console.log(isInterleave("aabcc", "dbbca", "aadbbcbcac")); // true
console.log(isInterleave("aabcc", "dbbca", "aadbbbaccc")); // false
console.log(isInterleave("", "", "")); // true