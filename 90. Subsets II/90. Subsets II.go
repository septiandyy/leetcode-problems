import "sort"

func subsetsWithDup(nums []int) [][]int {
    sort.Ints(nums)
    result := [][]int{}
    backtrack(nums, 0, []int{}, &result)
    return result
}

func backtrack(nums []int, start int, current []int, result *[][]int) {
    temp := make([]int, len(current))
    copy(temp, current)
    *result = append(*result, temp)
    
    for i := start; i < len(nums); i++ {
        if i > start && nums[i] == nums[i-1] {
            continue
        }
        current = append(current, nums[i])
        backtrack(nums, i+1, current, result)
        current = current[:len(current)-1]
    }
}