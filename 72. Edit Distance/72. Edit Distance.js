function minDistance(word1, word2) {
    const m = word1.length;
    const n = word2.length;

    // Create a DP table
    const dp = Array.from({ length: m + 1 }, () => Array(n + 1).fill(0));

    // Initialize the DP table
    for (let i = 0; i <= m; i++) {
        dp[i][0] = i;
    }
    for (let j = 0; j <= n; j++) {
        dp[0][j] = j;
    }

    // Fill the DP table
    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (word1[i - 1] === word2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];  // No additional cost if characters are the same
            } else {
                dp[i][j] = Math.min(
                    dp[i - 1][j] + 1,    // Deletion
                    dp[i][j - 1] + 1,    // Insertion
                    dp[i - 1][j - 1] + 1 // Replacement
                );
            }
        }
    }

    return dp[m][n];
}

// Example usage:
console.log(minDistance("horse", "ros")); // Output: 3
console.log(minDistance("intention", "execution")); // Output: 5