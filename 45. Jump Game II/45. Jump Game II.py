class Solution(object):
    def jump(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        if len(nums) <= 1:
            return 0
        
        jumps = 0
        current_max = 0
        next_max = 0
        
        for i in range(len(nums) - 1):
            next_max = max(next_max, i + nums[i])
            
            if i == current_max:
                jumps += 1
                current_max = next_max
                
                if current_max >= len(nums) - 1:
                    break
        
        return jumps