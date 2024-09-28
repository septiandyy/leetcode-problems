func myAtoi(s string) int {
    i, sign, result := 0, 1, 0
    
    // Step 1: Ignore leading whitespace
    for i < len(s) && s[i] == ' ' {
        i++
    }
    
    // Step 2: Check for sign
    if i < len(s) && (s[i] == '-' || s[i] == '+') {
        if s[i] == '-' {
            sign = -1
        }
        i++
    }
    
    // Step 3: Convert digits
    for i < len(s) && s[i] >= '0' && s[i] <= '9' {
        digit := int(s[i] - '0')
        // Check for overflow
        if result > math.MaxInt32/10 || (result == math.MaxInt32/10 && digit > math.MaxInt32%10) {
            if sign == 1 {
                return math.MaxInt32
            }
            return math.MinInt32
        }
        result = result*10 + digit
        i++
    }
    
    return sign * result
}