class Solution {
public:
    bool isPalindrome(int x) {
        // Negative numbers are not palindromes
        if (x < 0) return false;
        
        // Find the reverse of the number
        long long reversed = 0;
        int original = x;
        
        while (x != 0) {
            reversed = reversed * 10 + x % 10;
            x /= 10;
        }
        
        // Compare the reversed number with the original
        return original == reversed;
    }
};