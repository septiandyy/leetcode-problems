# @param {Integer[]} nums
# @return {Integer[][]}
def permute_unique(nums)
    result = []
    nums.sort!
    backtrack(nums, 0, result)
    result
end

def backtrack(nums, start, result)
    if start == nums.length
        result << nums.dup
        return
    end
    
    used = {}
    (start...nums.length).each do |i|
        next if used[nums[i]] || (i > start && nums[i] == nums[start])
        used[nums[i]] = true
        nums[start], nums[i] = nums[i], nums[start]
        backtrack(nums, start + 1, result)
        nums[start], nums[i] = nums[i], nums[start]
    end
end