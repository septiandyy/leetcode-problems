func isPalindrome(x int) bool {
    // Negative numbers are not palindromes
    if x < 0 {
        return false
    }
    
    // Find the reverse of the number
    reversed := 0
    original := x
    
    for x != 0 {
        reversed = reversed * 10 + x % 10
        x /= 10
    }
    
    // Compare the reversed number with the original
    return original == reversed
}