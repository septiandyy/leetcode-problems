func threeSumClosest(nums []int, target int) int {
    sort.Ints(nums)
    closestSum := nums[0] + nums[1] + nums[2]
    
    for i := 0; i < len(nums) - 2; i++ {
        left := i + 1
        right := len(nums) - 1
        
        for left < right {
            currentSum := nums[i] + nums[left] + nums[right]
            
            if abs(target - currentSum) < abs(target - closestSum) {
                closestSum = currentSum
            }
            
            if currentSum > target {
                right--
            } else if currentSum < target {
                left++
            } else {
                return target  // Found exact sum
            }
        }
    }
    
    return closestSum
}

func abs(x int) int {
    if x < 0 {
        return -x
    }
    return x
}