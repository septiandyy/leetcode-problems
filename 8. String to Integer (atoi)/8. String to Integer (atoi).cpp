class Solution {
public:
    int myAtoi(string s) {
        int i = 0, sign = 1, result = 0;
        
        // Step 1: Ignore leading whitespace
        while (i < s.length() && s[i] == ' ') i++;
        
        // Step 2: Check for sign
        if (i < s.length() && (s[i] == '-' || s[i] == '+')) {
            sign = (s[i] == '-') ? -1 : 1;
            i++;
        }
        
        // Step 3: Convert digits
        while (i < s.length() && isdigit(s[i])) {
            // Check for overflow
            if (result > INT_MAX / 10 || (result == INT_MAX / 10 && s[i] - '0' > INT_MAX % 10)) {
                return (sign == 1) ? INT_MAX : INT_MIN;
            }
            result = result * 10 + (s[i] - '0');
            i++;
        }
        
        return sign * result;
    }
};