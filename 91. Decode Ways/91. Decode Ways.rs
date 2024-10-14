impl Solution {
    pub fn num_decodings(s: String) -> i32 {
        let n = s.len();
        if n == 0 || s.chars().nth(0) == Some('0') {
            return 0;
        }
        
        let s = s.as_bytes();
        let mut dp = vec![0; n + 1];
        dp[0] = 1;
        dp[1] = 1;
        
        for i in 2..=n {
            let one_digit = (s[i-1] - b'0') as i32;
            let two_digits = (s[i-2] - b'0') as i32 * 10 + one_digit;
            
            if one_digit >= 1 {
                dp[i] += dp[i-1];
            }
            if two_digits >= 10 && two_digits <= 26 {
                dp[i] += dp[i-2];
            }
        }
        
        dp[n]
    }
}