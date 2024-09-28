class Solution(object):
    def romanToInt(self, s):
        """
        :type s: str
        :rtype: int
        """
        values = {
            'I': 1,
            'V': 5,
            'X': 10,
            'L': 50,
            'C': 100,
            'D': 500,
            'M': 1000
        }
        
        result = 0
        prev = 0
        
        for char in reversed(s):
            current = values[char]
            if current >= prev:
                result += current
            else:
                result -= current
            prev = current
        
        return result