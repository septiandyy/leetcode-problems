class Solution(object):
    def minimumTotal(self, triangle):
        """
        :type triangle: List[List[int]]
        :rtype: int
        """
        # Get last row as initial dp array
        dp = triangle[-1][:]
        
        # Start from second to last row and move up
        for i in range(len(triangle) - 2, -1, -1):
            for j in range(len(triangle[i])):
                # For each position, take current value + min of two possible paths below
                dp[j] = triangle[i][j] + min(dp[j], dp[j + 1])
        
        return dp[0]