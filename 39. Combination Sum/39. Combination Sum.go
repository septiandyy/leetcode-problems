func combinationSum(candidates []int, target int) [][]int {
    sort.Ints(candidates)
    var result [][]int
    backtrack(candidates, target, 0, []int{}, &result)
    return result
}

func backtrack(candidates []int, target int, index int, current []int, result *[][]int) {
    if target == 0 {
        temp := make([]int, len(current))
        copy(temp, current)
        *result = append(*result, temp)
        return
    }
    
    for i := index; i < len(candidates); i++ {
        if candidates[i] > target {
            break
        }
        current = append(current, candidates[i])
        backtrack(candidates, target - candidates[i], i, current, result)
        current = current[:len(current)-1]
    }
}