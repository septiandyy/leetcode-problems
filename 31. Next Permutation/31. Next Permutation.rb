# @param {Integer[]} nums
# @return {Void} Do not return anything, modify nums in-place instead.
def next_permutation(nums)
    i = nums.length - 2
    while i >= 0 && nums[i] >= nums[i + 1]
        i -= 1
    end
    
    if i >= 0
        j = nums.length - 1
        while j >= 0 && nums[j] <= nums[i]
            j -= 1
        end
        nums[i], nums[j] = nums[j], nums[i]
    end
    
    reverse(nums, i + 1, nums.length - 1)
end

def reverse(nums, start, end_index)
    while start < end_index
        nums[start], nums[end_index] = nums[end_index], nums[start]
        start += 1
        end_index -= 1
    end
end