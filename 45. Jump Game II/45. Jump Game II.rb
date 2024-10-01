# @param {Integer[]} nums
# @return {Integer}
def jump(nums)
    return 0 if nums.length <= 1
    
    jumps = 0
    current_max = 0
    next_max = 0
    
    (0...nums.length - 1).each do |i|
        next_max = [next_max, i + nums[i]].max
        
        if i == current_max
            jumps += 1
            current_max = next_max
            
            break if current_max >= nums.length - 1
        end
    end
    
    jumps
end