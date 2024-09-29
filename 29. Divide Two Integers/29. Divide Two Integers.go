func divide(dividend int, divisor int) int {
    if dividend == math.MinInt32 && divisor == -1 {
        return math.MaxInt32
    }
    
    dvd := int64(math.Abs(float64(dividend)))
    dvs := int64(math.Abs(float64(divisor)))
    sign := 1
    if (dividend < 0) != (divisor < 0) {
        sign = -1
    }
    quotient := int64(0)
    
    for dvd >= dvs {
        temp := dvs
        multiple := int64(1)
        for dvd >= (temp << 1) {
            temp <<= 1
            multiple <<= 1
        }
        dvd -= temp
        quotient += multiple
    }
    
    return int(int64(sign) * quotient)
}