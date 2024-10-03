# @param {Integer[]} nums
# @return {Boolean}
def can_jump(nums)
    max_reach = 0
    
    nums.each_with_index do |jump, i|
        return false if i > max_reach
        max_reach = [max_reach, i + jump].max
        return true if max_reach >= nums.length - 1
    end
    
    false
end