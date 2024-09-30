class Solution(object):
    def combinationSum(self, candidates, target):
        """
        :type candidates: List[int]
        :type target: int
        :rtype: List[List[int]]
        """
        candidates.sort()
        result = []
        self.backtrack(candidates, target, 0, [], result)
        return result
    
    def backtrack(self, candidates, target, index, current, result):
        if target == 0:
            result.append(list(current))
            return
        
        for i in range(index, len(candidates)):
            if candidates[i] > target:
                break
            current.append(candidates[i])
            self.backtrack(candidates, target - candidates[i], i, current, result)
            current.pop()