func lengthOfLongestSubstring(s string) int {
    n := len(s)
    if n <= 1 {
        return n
    }
    
    // Use a map to store the last index of each character
    lastIndex := make(map[byte]int)
    
    // Initialize the sliding window
    start, maxLen := 0, 0
    
    for i := 0; i < n; i++ {
        // If the current character has been seen before and its last index is within the current window
        if index, ok := lastIndex[s[i]]; ok && index >= start {
            // Move the start of the window to the position after the last occurrence of the character
            start = index + 1
        }
        
        // Update the last index of the current character
        lastIndex[s[i]] = i
        
        // Calculate the length of the current window
        currLen := i - start + 1
        
        // Update the maximum length if necessary
        if currLen > maxLen {
            maxLen = currLen
        }
    }
    
    return maxLen
}