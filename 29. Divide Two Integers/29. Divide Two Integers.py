class Solution(object):
    def divide(self, dividend, divisor):
        """
        :type dividend: int
        :type divisor: int
        :rtype: int
        """
        # Constants for 32-bit integer limits
        MAX_INT = 2**31 - 1
        MIN_INT = -2**31
        
        # Handle edge cases
        if dividend == MIN_INT and divisor == -1:
            return MAX_INT
        if divisor == 1:
            return dividend
        if divisor == -1:
            return -dividend if dividend > MIN_INT else MAX_INT

        # Determine the sign of the result
        sign = -1 if (dividend < 0) ^ (divisor < 0) else 1

        # Take absolute values
        dividend, divisor = abs(dividend), abs(divisor)

        quotient = 0
        while dividend >= divisor:
            temp, i = divisor, 1
            while dividend >= (temp << 1):
                if temp > MAX_INT // 2:
                    break
                temp <<= 1
                i <<= 1
            dividend -= temp
            quotient += i

        result = sign * quotient
        return min(max(result, MIN_INT), MAX_INT)