class Solution(object):
    def numDistinct(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: int
        """
        m, n = len(s), len(t)
        dp = [[0] * (n + 1) for _ in range(m + 1)]
        
        # Empty string is a subsequence of empty string once
        for i in range(m + 1):
            dp[i][0] = 1
            
        # Fill dp table
        for i in range(1, m + 1):
            for j in range(1, n + 1):
                # Copy the number of subsequences without including current char
                dp[i][j] = dp[i - 1][j]
                # If characters match, add subsequences ending at previous positions
                if s[i - 1] == t[j - 1]:
                    dp[i][j] += dp[i - 1][j - 1]
                    
        return dp[m][n]