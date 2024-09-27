# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer[]}
def two_sum(nums, target)
    num_map = {}
    
    nums.each_with_index do |num, i|
        complement = target - num
        if num_map.key?(complement)
            return [num_map[complement], i]
        end
        num_map[num] = i
    end
    
    # This should not happen given the problem constraints
    []
end