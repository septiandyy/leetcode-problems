# @param {Integer[]} nums
# @return {Void} Do not return anything, modify nums in-place instead.
def sort_colors(nums)
    low, mid, high = 0, 0, nums.length - 1
    
    while mid <= high
        case nums[mid]
        when 0
            nums[low], nums[mid] = nums[mid], nums[low]
            low += 1
            mid += 1
        when 1
            mid += 1
        when 2
            nums[mid], nums[high] = nums[high], nums[mid]
            high -= 1
        end
    end
end