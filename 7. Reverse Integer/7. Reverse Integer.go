func reverse(x int) int {
    rev := 0
    for x != 0 {
        pop := x % 10
        x /= 10
        
        // Check for overflow
        if rev > math.MaxInt32/10 || (rev == math.MaxInt32/10 && pop > 7) {
            return 0
        }
        if rev < math.MinInt32/10 || (rev == math.MinInt32/10 && pop < -8) {
            return 0
        }
        
        rev = rev*10 + pop
    }
    return rev
}