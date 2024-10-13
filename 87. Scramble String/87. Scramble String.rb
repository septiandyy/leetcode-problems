# @param {String} s1
# @param {String} s2
# @return {Boolean}
def is_scramble(s1, s2)
    return true if s1 == s2
    return false if s1.length != s2.length
    
    n = s1.length
    dp = Array.new(n) { Array.new(n) { Array.new(n + 1, false) } }
    
    # Initialize for substrings of length 1
    (0...n).each do |i|
        (0...n).each do |j|
            dp[i][j][1] = true if s1[i] == s2[j]
        end
    end
    
    # Build up the dp table
    (2..n).each do |len|
        (0..n-len).each do |i|
            (0..n-len).each do |j|
                (1...len).each do |k|
                    if (dp[i][j][k] && dp[i+k][j+k][len-k]) || 
                       (dp[i][j+len-k][k] && dp[i+k][j][len-k])
                        dp[i][j][len] = true
                        break
                    end
                end
            end
        end
    end
    
    dp[0][0][n]
end