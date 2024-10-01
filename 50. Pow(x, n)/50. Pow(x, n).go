func myPow(x float64, n int) float64 {
    if n == 0 {
        return 1
    }
    if n == math.MinInt32 {
        x = 1 / x
        n = -(n + 1)
        return x * myPow(x, n)
    }
    if n < 0 {
        x = 1 / x
        n = -n
    }
    result := 1.0
    for n > 0 {
        if n & 1 == 1 {
            result *= x
        }
        x *= x
        n >>= 1
    }
    return result
}