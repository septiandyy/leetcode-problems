class Solution(object):
    def myAtoi(self, s):
        """
        :type s: str
        :rtype: int
        """
        i, n = 0, len(s)
        
        # Step 1: Ignore leading whitespace
        while i < n and s[i] == ' ':
            i += 1
        
        # Step 2: Check for sign
        sign = 1
        if i < n and s[i] in ['-', '+']:
            sign = -1 if s[i] == '-' else 1
            i += 1
        
        # Step 3: Convert digits
        result = 0
        while i < n and s[i].isdigit():
            digit = int(s[i])
            # Check for overflow
            if result > 214748364 or (result == 214748364 and digit > 7):
                return 2147483647 if sign == 1 else -2147483648
            result = result * 10 + digit
            i += 1
        
        return sign * result