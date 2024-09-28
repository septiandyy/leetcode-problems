func romanToInt(s string) int {
    values := map[byte]int{
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000,
    }
    
    result := 0
    prev := 0
    
    for i := len(s) - 1; i >= 0; i-- {
        current := values[s[i]]
        if current >= prev {
            result += current
        } else {
            result -= current
        }
        prev = current
    }
    
    return result
}