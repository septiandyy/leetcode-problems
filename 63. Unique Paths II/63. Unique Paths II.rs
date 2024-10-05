impl Solution {
    pub fn unique_paths_with_obstacles(obstacle_grid: Vec<Vec<i32>>) -> i32 {
        let (m, n) = (obstacle_grid.len(), obstacle_grid[0].len());
        let mut dp = vec![vec![0; n]; m];
        
        // Initialize first cell
        dp[0][0] = if obstacle_grid[0][0] == 1 { 0 } else { 1 };
        
        // Initialize first row
        for j in 1..n {
            dp[0][j] = if obstacle_grid[0][j] == 1 || dp[0][j-1] == 0 { 0 } else { 1 };
        }
        
        // Initialize first column
        for i in 1..m {
            dp[i][0] = if obstacle_grid[i][0] == 1 || dp[i-1][0] == 0 { 0 } else { 1 };
        }
        
        // Fill the dp table
        for i in 1..m {
            for j in 1..n {
                if obstacle_grid[i][j] == 1 {
                    dp[i][j] = 0;
                } else {
                    dp[i][j] = dp[i-1][j] + dp[i][j-1];
                }
            }
        }
        
        dp[m-1][n-1]
    }
}