# @param {Integer[]} nums
# @return {Integer[][]}
def subsets_with_dup(nums)
    nums.sort!
    result = []
    backtrack(nums, 0, [], result)
    result
end

def backtrack(nums, start, current, result)
    result << current.dup
    
    (start...nums.length).each do |i|
        next if i > start && nums[i] == nums[i-1]
        current << nums[i]
        backtrack(nums, i + 1, current, result)
        current.pop
    end
end