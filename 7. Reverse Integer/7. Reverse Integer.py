class Solution(object):
    def reverse(self, x):
        """
        :type x: int
        :rtype: int
        """
        # Constants for 32-bit integer limits
        INT_MAX = 2**31 - 1
        INT_MIN = -2**31
        
        # Initialize the result
        rev = 0
        
        # Determine the sign of x
        sign = 1 if x > 0 else -1
        x = abs(x)
        
        # Reverse the digits
        while x != 0:
            pop = x % 10
            x //= 10
            
            # Check for overflow before updating rev
            if rev > INT_MAX // 10 or (rev == INT_MAX // 10 and pop > 7):
                return 0
            if rev < INT_MIN // 10 or (rev == INT_MIN // 10 and pop > 8):
                return 0
            
            rev = rev * 10 + pop
        
        # Apply the sign and check final result
        result = sign * rev
        if result < INT_MIN or result > INT_MAX:
            return 0
        
        return result