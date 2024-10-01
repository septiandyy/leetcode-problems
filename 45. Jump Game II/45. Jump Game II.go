func jump(nums []int) int {
    if len(nums) <= 1 {
        return 0
    }
    
    jumps := 0
    currentMax := 0
    nextMax := 0
    
    for i := 0; i < len(nums) - 1; i++ {
        if i + nums[i] > nextMax {
            nextMax = i + nums[i]
        }
        
        if i == currentMax {
            jumps++
            currentMax = nextMax
            
            if currentMax >= len(nums) - 1 {
                break
            }
        }
    }
    
    return jumps
}