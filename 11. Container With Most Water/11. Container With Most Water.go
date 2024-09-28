func maxArea(height []int) int {
    left, right := 0, len(height) - 1
    maxWater := 0
    
    for left < right {
        width := right - left
        h := min(height[left], height[right])
        area := width * h
        
        maxWater = max(maxWater, area)
        
        if height[left] < height[right] {
            left++
        } else {
            right--
        }
    }
    
    return maxWater
}

func min(a, b int) int {
    if a < b {
        return a
    }
    return b
}

func max(a, b int) int {
    if a > b {
        return a
    }
    return b
}