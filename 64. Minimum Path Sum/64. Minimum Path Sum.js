function minPathSum(grid) {
    const m = grid.length;
    const n = grid[0].length;

    // Create a DP table with the same dimensions as the grid
    const dp = Array(m).fill(null).map(() => Array(n).fill(0));

    // Initialize the top-left cell
    dp[0][0] = grid[0][0];

    // Initialize the first row
    for (let j = 1; j < n; j++) {
        dp[0][j] = dp[0][j - 1] + grid[0][j];
    }

    // Initialize the first column
    for (let i = 1; i < m; i++) {
        dp[i][0] = dp[i - 1][0] + grid[i][0];
    }

    // Fill in the rest of the DP table
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
        }
    }

    // The bottom-right cell contains the minimum path sum
    return dp[m - 1][n - 1];
}

// Example usage:
console.log(minPathSum([[1,3,1],[1,5,1],[4,2,1]])); // Output: 7
console.log(minPathSum([[1,2,3],[4,5,6]])); // Output: 12