class Solution(object):
    def letterCombinations(self, digits):
        """
        :type digits: str
        :rtype: List[str]
        """
        if not digits:
            return []
        
        letter_map = {
            '2': 'abc', '3': 'def', '4': 'ghi', '5': 'jkl',
            '6': 'mno', '7': 'pqrs', '8': 'tuv', '9': 'wxyz'
        }
        
        def backtrack(index, current):
            if index == len(digits):
                result.append(current)
                return
            
            for letter in letter_map[digits[index]]:
                backtrack(index + 1, current + letter)
        
        result = []
        backtrack(0, "")
        return result