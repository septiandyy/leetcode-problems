public class Solution {
    public bool IsNumber(string s) {
        int i = 0;
        bool seenDigit = false;
        bool seenDot = false;
        bool seenE = false;
        
        // Handle sign
        if (i < s.Length && (s[i] == '+' || s[i] == '-')) i++;
        
        for (; i < s.Length; i++) {
            if (char.IsDigit(s[i])) {
                seenDigit = true;
            } else if (s[i] == '.') {
                if (seenDot || seenE) return false;
                seenDot = true;
            } else if (s[i] == 'e' || s[i] == 'E') {
                if (seenE || !seenDigit) return false;
                seenE = true;
                seenDigit = false;
                if (i + 1 < s.Length && (s[i+1] == '+' || s[i+1] == '-')) i++;
            } else {
                return false;
            }
        }
        
        return seenDigit;
    }
}