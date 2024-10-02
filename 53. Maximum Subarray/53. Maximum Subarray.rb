# @param {Integer[]} nums
# @return {Integer}
def max_sub_array(nums)
    max_sum = nums[0]
    current_sum = nums[0]
    
    (1...nums.length).each do |i|
        current_sum = [nums[i], current_sum + nums[i]].max
        max_sum = [max_sum, current_sum].max
    end
    
    max_sum
end

# Divide and Conquer approach
def max_sub_array_divide_conquer(nums)
    max_sub_array_recursive(nums, 0, nums.length - 1)
end

def max_sub_array_recursive(nums, low, high)
    return nums[low] if low == high
    
    mid = (low + high) / 2
    [max_sub_array_recursive(nums, low, mid),
     max_sub_array_recursive(nums, mid + 1, high),
     max_crossing_sum(nums, low, mid, high)].max
end

def max_crossing_sum(nums, low, mid, high)
    sum = 0
    left_sum = -Float::INFINITY
    (mid).downto(low) do |i|
        sum += nums[i]
        left_sum = [left_sum, sum].max
    end
    
    sum = 0
    right_sum = -Float::INFINITY
    ((mid + 1)..high).each do |i|
        sum += nums[i]
        right_sum = [right_sum, sum].max
    end
    
    [left_sum + right_sum, left_sum, right_sum].max
end