func grayCode(n int) []int {
    size := 1 << n  // 2^n
    result := make([]int, size)
    
    for i := 0; i < size; i++ {
        result[i] = i ^ (i >> 1)
    }
    
    return result
}