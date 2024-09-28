func fourSum(nums []int, target int) [][]int {
    sort.Ints(nums)
    result := [][]int{}
    
    for a := 0; a < len(nums) - 3; a++ {
        if a > 0 && nums[a] == nums[a-1] {
            continue
        }
        for b := a + 1; b < len(nums) - 2; b++ {
            if b > a + 1 && nums[b] == nums[b-1] {
                continue
            }
            c, d := b + 1, len(nums) - 1
            for c < d {
                sum := nums[a] + nums[b] + nums[c] + nums[d]
                if sum == target {
                    result = append(result, []int{nums[a], nums[b], nums[c], nums[d]})
                    for c < d && nums[c] == nums[c+1] {
                        c++
                    }
                    for c < d && nums[d] == nums[d-1] {
                        d--
                    }
                    c++
                    d--
                } else if sum < target {
                    c++
                } else {
                    d--
                }
            }
        }
    }
    
    return result
}