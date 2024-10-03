func lengthOfLastWord(s string) int {
    length := 0
    i := len(s) - 1
    
    // Skip trailing spaces
    for i >= 0 && s[i] == ' ' {
        i--
    }
    
    // Count characters of the last word
    for i >= 0 && s[i] != ' ' {
        length++
        i--
    }
    
    return length
}