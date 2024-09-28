public class Solution {
    public bool IsPalindrome(int x) {
        // Negative numbers are not palindromes
        if (x < 0) return false;
        
        // Find the reverse of the number
        int reversed = 0;
        int original = x;
        
        while (x != 0) {
            int digit = x % 10;
            reversed = reversed * 10 + digit;
            x /= 10;
        }
        
        // Compare the reversed number with the original
        return original == reversed;
    }
}