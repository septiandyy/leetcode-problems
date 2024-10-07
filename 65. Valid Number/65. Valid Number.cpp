class Solution {
public:
    bool isNumber(string s) {
        int i = 0;
        bool seenDigit = false;
        bool seenDot = false;
        bool seenE = false;
        
        // Handle sign
        if (i < s.length() && (s[i] == '+' || s[i] == '-')) i++;
        
        for (; i < s.length(); i++) {
            if (isdigit(s[i])) {
                seenDigit = true;
            } else if (s[i] == '.') {
                if (seenDot || seenE) return false;
                seenDot = true;
            } else if (s[i] == 'e' || s[i] == 'E') {
                if (seenE || !seenDigit) return false;
                seenE = true;
                seenDigit = false;
                if (i + 1 < s.length() && (s[i+1] == '+' || s[i+1] == '-')) i++;
            } else {
                return false;
            }
        }
        
        return seenDigit;
    }
};