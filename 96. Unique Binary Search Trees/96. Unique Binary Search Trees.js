function numTrees(n) {
    // Array to store the number of unique BSTs for each number of nodes
    const dp = new Array(n + 1).fill(0);
    dp[0] = 1; // Base case: There's 1 unique BST with 0 nodes (empty tree)
    dp[1] = 1; // Base case: There's 1 unique BST with 1 node

    // Fill the dp array
    for (let i = 2; i <= n; i++) {
        for (let j = 0; j < i; j++) {
            dp[i] += dp[j] * dp[i - 1 - j];
        }
    }

    return dp[n];
}

// Example usage
console.log(numTrees(3)); // Output: 5
console.log(numTrees(1)); // Output: 1