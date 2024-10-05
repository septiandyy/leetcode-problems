func uniquePathsWithObstacles(obstacleGrid [][]int) int {
    m, n := len(obstacleGrid), len(obstacleGrid[0])
    dp := make([][]int, m)
    for i := range dp {
        dp[i] = make([]int, n)
    }
    
    // Initialize first cell
    if obstacleGrid[0][0] == 1 {
        return 0
    }
    dp[0][0] = 1
    
    // Initialize first row
    for j := 1; j < n; j++ {
        if obstacleGrid[0][j] == 1 || dp[0][j-1] == 0 {
            dp[0][j] = 0
        } else {
            dp[0][j] = 1
        }
    }
    
    // Initialize first column
    for i := 1; i < m; i++ {
        if obstacleGrid[i][0] == 1 || dp[i-1][0] == 0 {
            dp[i][0] = 0
        } else {
            dp[i][0] = 1
        }
    }
    
    // Fill the dp table
    for i := 1; i < m; i++ {
        for j := 1; j < n; j++ {
            if obstacleGrid[i][j] == 1 {
                dp[i][j] = 0
            } else {
                dp[i][j] = dp[i-1][j] + dp[i][j-1]
            }
        }
    }
    
    return dp[m-1][n-1]
}