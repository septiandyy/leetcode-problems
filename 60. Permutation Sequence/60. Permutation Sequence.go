func getPermutation(n int, k int) string {
    factorial := make([]int, 10)
    nums := make([]int, n)
    factorial[0] = 1
    
    for i := 1; i <= n; i++ {
        factorial[i] = factorial[i-1] * i
        nums[i-1] = i
    }
    
    k--  // Convert to 0-based index
    var result strings.Builder
    
    for i := 0; i < n; i++ {
        index := k / factorial[n-1-i]
        result.WriteString(strconv.Itoa(nums[index]))
        nums = append(nums[:index], nums[index+1:]...)
        k %= factorial[n-1-i]
    }
    
    return result.String()
}