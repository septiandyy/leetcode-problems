impl Solution {
    pub fn is_interleave(s1: String, s2: String, s3: String) -> bool {
        if s1.len() + s2.len() != s3.len() {
            return false;
        }
        
        let s1 = s1.as_bytes();
        let s2 = s2.as_bytes();
        let s3 = s3.as_bytes();
        let mut dp = vec![false; s2.len() + 1];
        
        for i in 0..=s1.len() {
            for j in 0..=s2.len() {
                if i == 0 && j == 0 {
                    dp[j] = true;
                } else if i == 0 {
                    dp[j] = dp[j-1] && s2[j-1] == s3[j-1];
                } else if j == 0 {
                    dp[j] = dp[j] && s1[i-1] == s3[i-1];
                } else {
                    dp[j] = (dp[j] && s1[i-1] == s3[i+j-1]) || 
                            (dp[j-1] && s2[j-1] == s3[i+j-1]);
                }
            }
        }
        
        dp[s2.len()]
    }
}