class Solution(object):
    def generateParenthesis(self, n):
        """
        :type n: int
        :rtype: List[str]
        """
        def backtrack(open, close, current):
            if len(current) == 2 * n:
                result.append(current)
                return
            
            if open < n:
                backtrack(open + 1, close, current + '(')
            if close < open:
                backtrack(open, close + 1, current + ')')

        result = []
        backtrack(0, 0, '')
        return result