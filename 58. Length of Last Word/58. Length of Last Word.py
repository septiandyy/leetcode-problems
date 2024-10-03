class Solution(object):
    def lengthOfLastWord(self, s):
        """
        :type s: str
        :rtype: int
        """
        # Remove trailing spaces and split the string into words
        words = s.strip().split()
        
        # If the string is empty after removing spaces, return 0
        if not words:
            return 0
        
        # Return the length of the last word
        return len(words[-1])