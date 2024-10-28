class Solution {
  int minimumTotal(List<List<int>> triangle) {
    List<int> dp = List.from(triangle.last);
    
    for (int i = triangle.length - 2; i >= 0; i--) {
      for (int j = 0; j <= i; j++) {
        dp[j] = triangle[i][j] + min(dp[j], dp[j + 1]);
      }
    }
    
    return dp[0];
  }
}