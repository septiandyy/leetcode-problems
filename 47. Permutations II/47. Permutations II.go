func permuteUnique(nums []int) [][]int {
    var result [][]int
    sort.Ints(nums)
    backtrack(nums, 0, &result)
    return result
}

func backtrack(nums []int, start int, result *[][]int) {
    if start == len(nums) {
        temp := make([]int, len(nums))
        copy(temp, nums)
        *result = append(*result, temp)
        return
    }
    
    used := make(map[int]bool)
    for i := start; i < len(nums); i++ {
        if used[nums[i]] || (i > start && nums[i] == nums[start]) {
            continue
        }
        used[nums[i]] = true
        nums[start], nums[i] = nums[i], nums[start]
        backtrack(nums, start+1, result)
        nums[start], nums[i] = nums[i], nums[start]
    }
}