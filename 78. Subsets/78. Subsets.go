func subsets(nums []int) [][]int {
    result := [][]int{}
    current := []int{}
    
    var backtrack func(int)
    backtrack = func(start int) {
        result = append(result, append([]int{}, current...))
        
        for i := start; i < len(nums); i++ {
            current = append(current, nums[i])
            backtrack(i + 1)
            current = current[:len(current)-1]
        }
    }
    
    backtrack(0)
    return result
}