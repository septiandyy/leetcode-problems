func search(nums []int, target int) int {
    left := 0
    right := len(nums) - 1
    
    for left <= right {
        mid := left + (right - left) / 2
        
        if nums[mid] == target {
            return mid
        }
        
        // Check if the left half is sorted
        if nums[left] <= nums[mid] {
            if target >= nums[left] && target < nums[mid] {
                right = mid - 1
            } else {
                left = mid + 1
            }
        } else {
            // Right half is sorted
            if target > nums[mid] && target <= nums[right] {
                left = mid + 1
            } else {
                right = mid - 1
            }
        }
    }
    
    return -1
}