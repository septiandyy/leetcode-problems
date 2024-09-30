impl Solution {
    pub fn is_match(s: String, p: String) -> bool {
        let (m, n) = (s.len(), p.len());
        let (s, p) = (s.as_bytes(), p.as_bytes());
        let mut dp = vec![vec![false; n + 1]; m + 1];
        dp[0][0] = true;
        
        for j in 1..=n {
            if p[j-1] == b'*' {
                dp[0][j] = dp[0][j-1];
            } else {
                break;
            }
        }
        
        for i in 1..=m {
            for j in 1..=n {
                if p[j-1] == b'*' {
                    dp[i][j] = dp[i][j-1] || dp[i-1][j];
                } else if p[j-1] == b'?' || s[i-1] == p[j-1] {
                    dp[i][j] = dp[i-1][j-1];
                }
            }
        }
        
        dp[m][n]
    }
}