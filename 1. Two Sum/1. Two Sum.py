class Solution:
    def twoSum(self, nums, target):
        num_map = {}
        
        for i, num in enumerate(nums):
            complement = target - num
            if complement in num_map:
                return [num_map[complement], i]
            num_map[num] = i
        
        return []  # Empty list if no solution found (shouldn't happen given the problem constraints)