class Solution(object):
    def removeDuplicates(self, nums):
        """
        :type nums: List[int]
        :rtype: int
        """
        if not nums:
            return 0
        
        k = 1  # Initialize the count of unique elements
        
        for i in range(1, len(nums)):
            if nums[i] != nums[i - 1]:  # Check if the current element is different from the previous one
                nums[k] = nums[i]  # Update the next unique position
                k += 1  # Increment the count of unique elements
        
        return k  # Return the count of unique elements