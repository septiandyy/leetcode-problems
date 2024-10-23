impl Solution {
    pub fn num_distinct(s: String, t: String) -> i32 {
        let m = s.len();
        let n = t.len();
        let s = s.as_bytes();
        let t = t.as_bytes();
        let mut dp = vec![vec![0u64; n + 1]; m + 1];
        
        // Empty string is a subsequence of empty string once
        for i in 0..=m {
            dp[i][0] = 1;
        }
        
        // Fill dp table
        for i in 1..=m {
            for j in 1..=n {
                dp[i][j] = dp[i-1][j];
                if s[i-1] == t[j-1] {
                    dp[i][j] += dp[i-1][j-1];
                }
            }
        }
        
        dp[m][n] as i32
    }
}