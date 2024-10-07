impl Solution {
    pub fn min_distance(word1: String, word2: String) -> i32 {
        let (m, n) = (word1.len(), word2.len());
        let mut dp = vec![vec![0; n + 1]; m + 1];
        
        for i in 1..=m { dp[i][0] = i as i32; }
        for j in 1..=n { dp[0][j] = j as i32; }
        
        for i in 1..=m {
            for j in 1..=n {
                if word1.as_bytes()[i-1] == word2.as_bytes()[j-1] {
                    dp[i][j] = dp[i-1][j-1];
                } else {
                    dp[i][j] = dp[i-1][j].min(dp[i][j-1]).min(dp[i-1][j-1]) + 1;
                }
            }
        }
        
        dp[m][n]
    }
}