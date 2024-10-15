# @param {String} s1
# @param {String} s2
# @param {String} s3
# @return {Boolean}
def is_interleave(s1, s2, s3)
    return false if s1.length + s2.length != s3.length
    
    dp = Array.new(s2.length + 1, false)
    
    (0..s1.length).each do |i|
        (0..s2.length).each do |j|
            if i == 0 && j == 0
                dp[j] = true
            elsif i == 0
                dp[j] = dp[j-1] && s2[j-1] == s3[j-1]
            elsif j == 0
                dp[j] = dp[j] && s1[i-1] == s3[i-1]
            else
                dp[j] = (dp[j] && s1[i-1] == s3[i+j-1]) || 
                        (dp[j-1] && s2[j-1] == s3[i+j-1])
            end
        end
    end
    
    dp[s2.length]
end