# @param {Integer[]} nums
# @return {Integer[][]}
def subsets(nums)
    result = []
    backtrack(nums, 0, [], result)
    result
end

def backtrack(nums, start, current, result)
    result << current.dup
    
    (start...nums.length).each do |i|
        current << nums[i]
        backtrack(nums, i + 1, current, result)
        current.pop
    end
end