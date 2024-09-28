impl Solution {
    pub fn is_palindrome(x: i32) -> bool {
        // Negative numbers are not palindromes
        if x < 0 {
            return false;
        }
        
        // Find the reverse of the number
        let mut reversed = 0;
        let mut original = x;
        
        while original != 0 {
            reversed = reversed * 10 + original % 10;
            original /= 10;
        }
        
        // Compare the reversed number with the original
        x == reversed
    }
}