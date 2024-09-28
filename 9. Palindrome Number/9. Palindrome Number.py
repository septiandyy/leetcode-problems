class Solution(object):
    def isPalindrome(self, x):
        """
        :type x: int
        :rtype: bool
        """
        # Negative numbers are not palindromes
        if x < 0:
            return False
        
        # Find the reverse of the number
        reversed_num = 0
        original = x
        
        while x != 0:
            reversed_num = reversed_num * 10 + x % 10
            x //= 10
        
        # Compare the reversed number with the original
        return original == reversed_num