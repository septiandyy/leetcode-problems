class Solution(object):
    def removeElement(self, nums, val):
        """
        :type nums: List[int]
        :type val: int
        :rtype: int
        """
        k = 0  # Counter for elements not equal to val
        
        for i in range(len(nums)):
            if nums[i] != val:  # Check if the current element is not equal to val
                nums[k] = nums[i]  # Place the element at the next position
                k += 1  # Increment the count of valid elements
        
        return k  # Return the count of elements not equal to val