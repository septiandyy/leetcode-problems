class Solution(object):
    def longestPalindrome(self, s):
        """
        :type s: str
        :rtype: str
        """
        n = len(s)
        if n < 2:
            return s

        start, max_length = 0, 1

        for i in range(n):
            # Odd length palindromes
            left, right = i, i
            while left >= 0 and right < n and s[left] == s[right]:
                if right - left + 1 > max_length:
                    start = left
                    max_length = right - left + 1
                left -= 1
                right += 1

            # Even length palindromes
            left, right = i, i + 1
            while left >= 0 and right < n and s[left] == s[right]:
                if right - left + 1 > max_length:
                    start = left
                    max_length = right - left + 1
                left -= 1
                right += 1

        return s[start:start + max_length]

# Example usage
if __name__ == "__main__":
    solution = Solution()
    print(solution.longestPalindrome("babad"))  # Output: "bab" or "aba"
    print(solution.longestPalindrome("cbbd"))   # Output: "bb"