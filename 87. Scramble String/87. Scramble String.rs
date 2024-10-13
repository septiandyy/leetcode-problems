impl Solution {
    pub fn is_scramble(s1: String, s2: String) -> bool {
        if s1 == s2 { return true; }
        if s1.len() != s2.len() { return false; }
        
        let n = s1.len();
        let mut dp = vec![vec![vec![false; n + 1]; n]; n];
        
        let s1: Vec<char> = s1.chars().collect();
        let s2: Vec<char> = s2.chars().collect();
        
        // Initialize for substrings of length 1
        for i in 0..n {
            for j in 0..n {
                if s1[i] == s2[j] {
                    dp[i][j][1] = true;
                }
            }
        }
        
        // Build up the dp table
        for len in 2..=n {
            for i in 0..=n-len {
                for j in 0..=n-len {
                    for k in 1..len {
                        if (dp[i][j][k] && dp[i+k][j+k][len-k]) || 
                           (dp[i][j+len-k][k] && dp[i+k][j][len-k]) {
                            dp[i][j][len] = true;
                            break;
                        }
                    }
                }
            }
        }
        
        dp[0][0][n]
    }
}