public class Solution {
    public int NumTrees(int n) {
        long[] dp = new long[n + 1];
        dp[0] = dp[1] = 1;
        
        for (int i = 2; i <= n; i++) {
            for (int j = 0; j < i; j++) {
                dp[i] += dp[j] * dp[i - j - 1];
            }
        }
        
        return (int)dp[n];
    }
}