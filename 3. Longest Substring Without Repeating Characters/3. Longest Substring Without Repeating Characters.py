class Solution:
    def lengthOfLongestSubstring(self, s):
        char_index_map = {}
        start = 0
        max_len = 0

        for i, char in enumerate(s):
            if char in char_index_map and char_index_map[char] >= start:
                start = char_index_map[char] + 1
            char_index_map[char] = i
            max_len = max(max_len, i - start + 1)

        return max_len

# Test cases
solution = Solution()

s1 = "abcabcbb"
s2 = "bbbbb"
s3 = "pwwkew"

print(f"Length of longest substring: {solution.lengthOfLongestSubstring(s1)}")  # Output: 3
print(f"Length of longest substring: {solution.lengthOfLongestSubstring(s2)}")  # Output: 1
print(f"Length of longest substring: {solution.lengthOfLongestSubstring(s3)}")  # Output: 3