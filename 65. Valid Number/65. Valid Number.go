func isNumber(s string) bool {
    i := 0
    seenDigit, seenDot, seenE := false, false, false
    
    // Handle sign
    if i < len(s) && (s[i] == '+' || s[i] == '-') {
        i++
    }
    
    for ; i < len(s); i++ {
        if s[i] >= '0' && s[i] <= '9' {
            seenDigit = true
        } else if s[i] == '.' {
            if seenDot || seenE {
                return false
            }
            seenDot = true
        } else if s[i] == 'e' || s[i] == 'E' {
            if seenE || !seenDigit {
                return false
            }
            seenE = true
            seenDigit = false
            if i+1 < len(s) && (s[i+1] == '+' || s[i+1] == '-') {
                i++
            }
        } else {
            return false
        }
    }
    
    return seenDigit
}