# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer}
def search(nums, target)
    left = 0
    right = nums.length - 1
    
    while left <= right
        mid = left + (right - left) / 2
        
        return mid if nums[mid] == target
        
        # Check if the left half is sorted
        if nums[left] <= nums[mid]
            if target >= nums[left] && target < nums[mid]
                right = mid - 1
            else
                left = mid + 1
            end
        # Right half is sorted
        else
            if target > nums[mid] && target <= nums[right]
                left = mid + 1
            else
                right = mid - 1
            end
        end
    end
    
    -1
end