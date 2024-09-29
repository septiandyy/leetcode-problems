func searchRange(nums []int, target int) []int {
    left := findBound(nums, target, true)
    if left == -1 {
        return []int{-1, -1}
    }
    right := findBound(nums, target, false)
    return []int{left, right}
}

func findBound(nums []int, target int, isLeft bool) int {
    left, right := 0, len(nums)-1
    result := -1
    
    for left <= right {
        mid := left + (right - left) / 2
        if nums[mid] == target {
            result = mid
            if isLeft {
                right = mid - 1
            } else {
                left = mid + 1
            }
        } else if nums[mid] < target {
            left = mid + 1
        } else {
            right = mid - 1
        }
    }
    
    return result
}