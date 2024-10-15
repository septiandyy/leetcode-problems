# @param {Integer} n
# @return {Integer}
def num_trees(n)
    dp = Array.new(n + 1, 0)
    dp[0] = dp[1] = 1
    
    (2..n).each do |i|
        (0...i).each do |j|
            dp[i] += dp[j] * dp[i - j - 1]
        end
    end
    
    dp[n]
end