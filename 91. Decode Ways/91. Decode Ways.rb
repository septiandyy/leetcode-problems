# @param {String} s
# @return {Integer}
def num_decodings(s)
    n = s.length
    return 0 if n == 0 || s[0] == '0'
    
    dp = Array.new(n + 1, 0)
    dp[0] = 1
    dp[1] = 1
    
    (2..n).each do |i|
        one_digit = s[i-1].to_i
        two_digits = s[i-2, 2].to_i
        
        dp[i] += dp[i-1] if one_digit >= 1
        dp[i] += dp[i-2] if two_digits >= 10 && two_digits <= 26
    end
    
    dp[n]
end