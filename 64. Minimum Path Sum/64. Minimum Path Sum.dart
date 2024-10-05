class Solution {
  int minPathSum(List<List<int>> grid) {
    int m = grid.length;
    int n = grid[0].length;
    List<List<int>> dp = List.generate(m, (_) => List<int>.filled(n, 0));
    
    dp[0][0] = grid[0][0];
    
    // Initialize first row
    for (int j = 1; j < n; j++) {
      dp[0][j] = dp[0][j-1] + grid[0][j];
    }
    
    // Initialize first column
    for (int i = 1; i < m; i++) {
      dp[i][0] = dp[i-1][0] + grid[i][0];
    }
    
    // Fill the dp table
    for (int i = 1; i < m; i++) {
      for (int j = 1; j < n; j++) {
        dp[i][j] = [dp[i-1][j], dp[i][j-1]].reduce(min) + grid[i][j];
      }
    }
    
    return dp[m-1][n-1];
  }
}