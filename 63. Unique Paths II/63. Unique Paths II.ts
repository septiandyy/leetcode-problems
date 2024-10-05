function uniquePathsWithObstacles(obstacleGrid: number[][]): number {
    const m = obstacleGrid.length;
    const n = obstacleGrid[0].length;
    const dp: number[][] = Array(m).fill(0).map(() => Array(n).fill(0));
    
    // Initialize first cell
    dp[0][0] = obstacleGrid[0][0] === 1 ? 0 : 1;
    
    // Initialize first row
    for (let j = 1; j < n; j++) {
        dp[0][j] = (obstacleGrid[0][j] === 1 || dp[0][j-1] === 0) ? 0 : 1;
    }
    
    // Initialize first column
    for (let i = 1; i < m; i++) {
        dp[i][0] = (obstacleGrid[i][0] === 1 || dp[i-1][0] === 0) ? 0 : 1;
    }
    
    // Fill the dp table
    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            if (obstacleGrid[i][j] === 1) {
                dp[i][j] = 0;
            } else {
                dp[i][j] = dp[i-1][j] + dp[i][j-1];
            }
        }
    }
    
    return dp[m-1][n-1];
}