class Solution(object):
    def combinationSum2(self, candidates, target):
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
            if i > index and candidates[i] == candidates[i-1]:
                continue
            if candidates[i] > target:
                break
            current.append(candidates[i])
            self.backtrack(candidates, target - candidates[i], i + 1, current, result)
            current.pop()