class Solution:
    def firstMissingPositive(self, nums):
        n = len(nums)
        b = False
        for i in range(n):
            if nums[i] == 1:
                b = True
            if nums[i] > n or nums[i] <= 0:
                nums[i] = 1
        if not b:
            return 1
        for i in range(n):
            if nums[abs(nums[i]) - 1] > 0:
                nums[abs(nums[i]) - 1] *= -1
        for i in range(n):
            if nums[i] > 0:
                return i + 1
        return n + 1