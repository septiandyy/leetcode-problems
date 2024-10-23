# @param {String} s
# @param {String} t
# @return {Integer}
def num_distinct(s, t)
    m, n = s.length, t.length
    dp = Array.new(m + 1) { Array.new(n + 1, 0) }
    
    # Empty string is a subsequence of empty string once
    (0..m).each { |i| dp[i][0] = 1 }
    
    # Fill dp table
    (1..m).each do |i|
        (1..n).each do |j|
            dp[i][j] = dp[i-1][j]
            dp[i][j] += dp[i-1][j-1] if s[i-1] == t[j-1]
        end
    end
    
    dp[m][n]
end