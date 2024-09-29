class Solution(object):
    def searchRange(self, nums, target):
        """
        :type nums: List[int]
        :type target: int
        :rtype: List[int]
        """
        def findBound(nums, target, isLeft):
            left, right = 0, len(nums) - 1
            result = -1
            
            while left <= right:
                mid = left + (right - left) // 2
                if nums[mid] == target:
                    result = mid
                    if isLeft:
                        right = mid - 1
                    else:
                        left = mid + 1
                elif nums[mid] < target:
                    left = mid + 1
                else:
                    right = mid - 1
            
            return result
        
        left = findBound(nums, target, True)
        if left == -1:
            return [-1, -1]
        right = findBound(nums, target, False)
        return [left, right]