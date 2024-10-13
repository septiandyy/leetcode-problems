class Solution(object):
    def grayCode(self, n):
        """
        :type n: int
        :rtype: List[int]
        """
        size = 1 << n  # 2^n
        result = [0] * size
        
        for i in range(size):
            result[i] = i ^ (i >> 1)
        
        return result