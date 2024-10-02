func maxSubArray(nums []int) int {
    maxSum := nums[0]
    currentSum := nums[0]
    
    for i := 1; i < len(nums); i++ {
        if nums[i] > currentSum + nums[i] {
            currentSum = nums[i]
        } else {
            currentSum = currentSum + nums[i]
        }
        if currentSum > maxSum {
            maxSum = currentSum
        }
    }
    
    return maxSum
}

// Divide and Conquer approach
func maxSubArrayDivideConquer(nums []int) int {
    return maxSubArrayRecursive(nums, 0, len(nums) - 1)
}

func maxSubArrayRecursive(nums []int, low, high int) int {
    if low == high {
        return nums[low]
    }
    
    mid := (low + high) / 2
    return max(max(maxSubArrayRecursive(nums, low, mid),
                   maxSubArrayRecursive(nums, mid + 1, high)),
               maxCrossingSum(nums, low, mid, high))
}

func maxCrossingSum(nums []int, low, mid, high int) int {
    sum := 0
    leftSum := nums[mid]
    for i := mid; i >= low; i-- {
        sum += nums[i]
        if sum > leftSum {
            leftSum = sum
        }
    }
    
    sum = 0
    rightSum := nums[mid + 1]
    for i := mid + 1; i <= high; i++ {
        sum += nums[i]
        if sum > rightSum {
            rightSum = sum
        }
    }
    
    return max(leftSum + rightSum, max(leftSum, rightSum))
}

func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}