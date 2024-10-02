class Solution(object):
    def maxSubArray(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        max_sum = nums[0]
        current_sum = nums[0]
        
        for num in nums[1:]:
            current_sum = max(num, current_sum + num)
            max_sum = max(max_sum, current_sum)
        
        return max_sum
    
    def maxSubArrayDivideConquer(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        def max_crossing_sum(nums, low, mid, high):
            left_sum = float('-inf')
            sum = 0
            for i in range(mid, low - 1, -1):
                sum += nums[i]
                if sum > left_sum:
                    left_sum = sum
            
            right_sum = float('-inf')
            sum = 0
            for i in range(mid + 1, high + 1):
                sum += nums[i]
                if sum > right_sum:
                    right_sum = sum
            
            return max(left_sum + right_sum, left_sum, right_sum)
        
        def max_subarray_recursive(nums, low, high):
            if low == high:
                return nums[low]
            
            mid = (low + high) // 2
            return max(max_subarray_recursive(nums, low, mid),
                       max_subarray_recursive(nums, mid + 1, high),
                       max_crossing_sum(nums, low, mid, high))
        
        return max_subarray_recursive(nums, 0, len(nums) - 1)