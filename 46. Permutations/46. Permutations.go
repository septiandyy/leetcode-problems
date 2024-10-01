func permute(nums []int) [][]int {
    var result [][]int
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
    
    for i := start; i < len(nums); i++ {
        nums[start], nums[i] = nums[i], nums[start]
        backtrack(nums, start+1, result)
        nums[start], nums[i] = nums[i], nums[start]
    }
}