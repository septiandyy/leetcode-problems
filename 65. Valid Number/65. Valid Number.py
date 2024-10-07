import re

class Solution(object):
    def isNumber(self, s):
        """
        :type s: str
        :rtype: bool
        """
        # Define the regex pattern for a valid number
        pattern = r'^[+-]?(\d+(\.\d*)?|\.\d+)([eE][+-]?\d+)?$'
        
        # Use re.match to check if the string matches the pattern
        match = re.match(pattern, s)
        
        # Check if the match covers the entire string
        return match is not None and match.end() == len(s)

# Example usage:
solution = Solution()
print(solution.isNumber("0"))          # Output: True
print(solution.isNumber("e"))          # Output: False
print(solution.isNumber("."))          # Output: False
print(solution.isNumber("2e10"))       # Output: True
print(solution.isNumber("-90E3"))      # Output: True
print(solution.isNumber("53.5e93"))    # Output: True
print(solution.isNumber("abc"))        # Output: False
print(solution.isNumber("1a"))         # Output: False
print(solution.isNumber("1e"))         # Output: False