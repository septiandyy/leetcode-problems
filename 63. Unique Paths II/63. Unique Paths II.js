function uniquePathsWithObstacles(obstacleGrid) {
    const m = obstacleGrid.length;
    const n = obstacleGrid[0].length;
    
    // If the start or end cell is an obstacle, return 0
    if (obstacleGrid[0][0] === 1 || obstacleGrid[m-1][n-1] === 1) {
        return 0;
    }
    
    // Initialize the dp table
    const dp = Array.from({ length: m }, () => Array(n).fill(0));
    
    // Base case
    dp[0][0] = 1;
    
    // Fill the first row
    for (let j = 1; j < n; j++) {
        dp[0][j] = obstacleGrid[0][j] === 0 ? dp[0][j-1] : 0;
    }
    
    // Fill the first column
    for (let i = 1; i < m; i++) {
        dp[i][0] = obstacleGrid[i][0] === 0 ? dp[i-1][0] : 0;
    }
    
    // Fill the rest of the dp table
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (obstacleGrid[i][j] === 0) {
                dp[i][j] = dp[i-1][j] + dp[i][j-1];
            } else {
                dp[i][j] = 0;
            }
        }
    }
    
    // The result is in the bottom-right corner of the dp table
    return dp[m-1][n-1];
}