func climbStairs(n int) int {
    if n <= 2 {
        return n
    }
    
    first, second := 1, 2
    for i := 3; i <= n; i++ {
        first, second = second, first + second
    }
    return second
}