func strStr(haystack string, needle string) int {
    
    for i := 0 ; i <= len(haystack)-len(needle) ; i++{
        match := true
        if haystack[i] == needle[0] {
            for j, c := range needle {
                if haystack[i+j] != byte(c) {
                    match = false
                    break
                }
            }
            if match {
                return i
            }   
        } 
    }
    return -1
}