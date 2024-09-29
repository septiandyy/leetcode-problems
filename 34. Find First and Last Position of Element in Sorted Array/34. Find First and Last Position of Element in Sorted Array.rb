# @param {Integer[]} nums
# @param {Integer} target
# @return {Integer[]}
def search_range(nums, target)
    left = find_bound(nums, target, true)
    return [-1, -1] if left == -1
    right = find_bound(nums, target, false)
    [left, right]
end

def find_bound(nums, target, is_left)
    left, right = 0, nums.length - 1
    result = -1
    
    while left <= right
        mid = left + (right - left) / 2
        if nums[mid] == target
            result = mid
            if is_left
                right = mid - 1
            else
                left = mid + 1
            end
        elsif nums[mid] < target
            left = mid + 1
        else
            right = mid - 1
        end
    end
    
    result
end