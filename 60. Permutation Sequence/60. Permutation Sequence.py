class Solution(object):
    def getPermutation(self, n, k):
        """
        :type n: int
        :type k: int
        :rtype: str
        """
        factorial = [1]
        nums = list(range(1, n + 1))
        result = []
        
        for i in range(1, n + 1):
            factorial.append(factorial[-1] * i)
        
        k -= 1  # Convert to 0-based index
        
        for i in range(n, 0, -1):
            idx = k // factorial[i - 1]
            k %= factorial[i - 1]
            
            result.append(str(nums[idx]))
            nums.pop(idx)
        
        return ''.join(result)