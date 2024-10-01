class Solution(object):
    def myPow(self, x, n):
        """
        :type x: float
        :type n: int
        :rtype: float
        """
        if n == 0:
            return 1.0
        
        if n < 0:
            x = 1 / x
            n = -n
        
        result = 1.0
        while n > 0:
            if n & 1:
                result *= x
            x *= x
            n >>= 1
        
        return result