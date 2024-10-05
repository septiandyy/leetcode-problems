# @param {Integer[][]} grid
# @return {Integer}
def min_path_sum(grid)
    m, n = grid.length, grid[0].length
    dp = Array.new(m) { Array.new(n, 0) }
    
    dp[0][0] = grid[0][0]
    
    # Initialize first row
    (1...n).each do |j|
        dp[0][j] = dp[0][j-1] + grid[0][j]
    end
    
    # Initialize first column
    (1...m).each do |i|
        dp[i][0] = dp[i-1][0] + grid[i][0]
    end
    
    # Fill the dp table
    (1...m).each do |i|
        (1...n).each do |j|
            dp[i][j] = [dp[i-1][j], dp[i][j-1]].min + grid[i][j]
        end
    end
    
    dp[m-1][n-1]
end