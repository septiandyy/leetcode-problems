class Solution(object):
    def uniquePaths(self, m, n):
        """
        :type m: int
        :type n: int
        :rtype: int
        """
        # Initialize the dp table
        dp = [[1] * n for _ in range(m)]
        
        # Fill the dp table
        for i in range(1, m):
            for j in range(1, n):
                dp[i][j] = dp[i-1][j] + dp[i][j-1]
        
        # Return the bottom-right cell
        return dp[m-1][n-1]