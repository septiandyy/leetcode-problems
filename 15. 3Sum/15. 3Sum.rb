# @param {Integer[]} nums
# @return {Integer[][]}
def three_sum(nums)
    result = []
    return result if nums.length < 3
    
    nums.sort!
    
    (0..nums.length-3).each do |i|
        next if i > 0 && nums[i] == nums[i-1]
        
        left, right = i+1, nums.length-1
        
        while left < right
            sum = nums[i] + nums[left] + nums[right]
            
            if sum == 0
                result << [nums[i], nums[left], nums[right]]
                left += 1 while left < right && nums[left] == nums[left+1]
                right -= 1 while left < right && nums[right] == nums[right-1]
                left += 1
                right -= 1
            elsif sum < 0
                left += 1
            else
                right -= 1
            end
        end
    end
    
    result
end