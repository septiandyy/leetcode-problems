func findSubstring(s string, words []string) []int {
    result := []int{}
    if len(s) == 0 || len(words) == 0 {
        return result
    }

    wordLength := len(words[0])
    totalLength := wordLength * len(words)
    if len(s) < totalLength {
        return result
    }

    wordCount := make(map[string]int)
    for _, word := range words {
        wordCount[word]++
    }

    for i := 0; i <= len(s)-totalLength; i++ {
        seenWords := make(map[string]int)
        j := 0
        for ; j < len(words); j++ {
            startIndex := i + j*wordLength
            currentWord := s[startIndex : startIndex+wordLength]

            if _, exists := wordCount[currentWord]; !exists {
                break
            }

            seenWords[currentWord]++

            if seenWords[currentWord] > wordCount[currentWord] {
                break
            }
        }

        if j == len(words) {
            result = append(result, i)
        }
    }

    return result
}