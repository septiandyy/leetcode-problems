func longestPalindrome(s string) string {
    n := len(s)
    if n < 2 {
        return s
    }

    start, maxLength := 0, 1

    for i := 0; i < n; i++ {
        // Odd length palindromes
        left, right := i, i
        for left >= 0 && right < n && s[left] == s[right] {
            if right-left+1 > maxLength {
                start = left
                maxLength = right - left + 1
            }
            left--
            right++
        }

        // Even length palindromes
        left, right = i, i+1
        for left >= 0 && right < n && s[left] == s[right] {
            if right-left+1 > maxLength {
                start = left
                maxLength = right - left + 1
            }
            left--
            right++
        }
    }

    return s[start : start+maxLength]
}