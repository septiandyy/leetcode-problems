func countAndSay(n int) string {
    if n == 1 {
        return "1"
    }
    
    prev := countAndSay(n - 1)
    var result strings.Builder
    count := 1
    
    for i := 1; i <= len(prev); i++ {
        if i < len(prev) && prev[i] == prev[i-1] {
            count++
        } else {
            result.WriteString(strconv.Itoa(count))
            result.WriteByte(prev[i-1])
            count = 1
        }
    }
    
    return result.String()
}