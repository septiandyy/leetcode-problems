func combine(n int, k int) [][]int {
    result := [][]int{}
    current := []int{}
    
    var backtrack func(int)
    backtrack = func(start int) {
        if len(current) == k {
            combination := make([]int, k)
            copy(combination, current)
            result = append(result, combination)
            return
        }
        
        for i := start; i <= n; i++ {
            current = append(current, i)
            backtrack(i + 1)
            current = current[:len(current)-1]
        }
    }
    
    backtrack(1)
    return result
}