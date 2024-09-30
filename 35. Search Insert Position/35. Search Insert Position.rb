# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer}
def search_insert(nums, target)
    left = 0
    right = nums.length - 1
    
    while left <= right
        mid = left + (right - left) / 2
        
        if nums[mid] == target
            return mid
        elsif nums[mid] < target
            left = mid + 1
        else
            right = mid - 1
        end
    end
    
    left
end