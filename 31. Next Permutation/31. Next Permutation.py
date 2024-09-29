class Solution(object):
    def nextPermutation(self, nums):
        """
        :type nums: List[int]
        :rtype: None Do not return anything, modify nums in-place instead.
        """
        index=-1
        for i in range(len(nums)-2,-1,-1):
            if nums[i]<nums[i+1]:
                index=i
                break
        if index== -1 :
            nums.reverse()
            return nums
        for i in range(len(nums)-1,index,-1) :
            if nums[i]>nums[index]:
                nums[i],nums[index]=nums[index],nums[i]
                break
        nums[index+1:len(nums)]=sorted(nums[index+1:])
        return nums
    
nums = [3,2,1]
solution = Solution()
print(solution.nextPermutation(nums))