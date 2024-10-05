# @param {Integer[][]} obstacle_grid
# @return {Integer}
def unique_paths_with_obstacles(obstacle_grid)
    m, n = obstacle_grid.length, obstacle_grid[0].length
    dp = Array.new(m) { Array.new(n, 0) }
    
    # Initialize first cell
    dp[0][0] = obstacle_grid[0][0] == 1 ? 0 : 1
    
    # Initialize first row
    (1...n).each do |j|
        dp[0][j] = (obstacle_grid[0][j] == 1 || dp[0][j-1] == 0) ? 0 : 1
    end
    
    # Initialize first column
    (1...m).each do |i|
        dp[i][0] = (obstacle_grid[i][0] == 1 || dp[i-1][0] == 0) ? 0 : 1
    end
    
    # Fill the dp table
    (1...m).each do |i|
        (1...n).each do |j|
            if obstacle_grid[i][j] == 1
                dp[i][j] = 0
            else
                dp[i][j] = dp[i-1][j] + dp[i][j-1]
            end
        end
    end
    
    dp[m-1][n-1]
end