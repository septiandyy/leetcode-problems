function isPalindrome(x: number): boolean {
    // Negative numbers are not palindromes
    if (x < 0) return false;
    
    // Find the reverse of the number
    let reversed: number = 0;
    let original: number = x;
    
    while (x !== 0) {
        reversed = reversed * 10 + x % 10;
        x = Math.floor(x / 10);
    }
    
    // Compare the reversed number with the original
    return original === reversed;
};