# @param {Integer[]} nums
# @return {Integer[][]}
def permute(nums)
    result = []
    backtrack(nums, 0, result)
    result
end

def backtrack(nums, start, result)
    if start == nums.length
        result << nums.dup
        return
    end
    
    (start...nums.length).each do |i|
        nums[start], nums[i] = nums[i], nums[start]
        backtrack(nums, start + 1, result)
        nums[start], nums[i] = nums[i], nums[start]
    end
end