public class Solution {
    public int MinimumTotal(IList<IList<int>> triangle) {
        int[] dp = triangle[triangle.Count - 1].ToArray();
        
        for (int i = triangle.Count - 2; i >= 0; i--) {
            for (int j = 0; j <= i; j++) {
                dp[j] = triangle[i][j] + Math.Min(dp[j], dp[j + 1]);
            }
        }
        
        return dp[0];
    }
}