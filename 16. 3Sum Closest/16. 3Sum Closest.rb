# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer}
def three_sum_closest(nums, target)
    nums.sort!
    closest_sum = nums[0] + nums[1] + nums[2]
    
    (0..nums.length - 3).each do |i|
        left = i + 1
        right = nums.length - 1
        
        while left < right
            current_sum = nums[i] + nums[left] + nums[right]
            
            if (target - current_sum).abs < (target - closest_sum).abs
                closest_sum = current_sum
            end
            
            if current_sum > target
                right -= 1
            elsif current_sum < target
                left += 1
            else
                return target  # Found exact sum
            end
        end
    end
    
    closest_sum
end