public class Solution {
    public int MyAtoi(string s) {
        int i = 0, sign = 1, result = 0;
        
        // Step 1: Ignore leading whitespace
        while (i < s.Length && s[i] == ' ') i++;
        
        // Step 2: Check for sign
        if (i < s.Length && (s[i] == '-' || s[i] == '+')) {
            sign = (s[i] == '-') ? -1 : 1;
            i++;
        }
        
        // Step 3: Convert digits
        while (i < s.Length && char.IsDigit(s[i])) {
            int digit = s[i] - '0';
            // Check for overflow
            if (result > int.MaxValue / 10 || (result == int.MaxValue / 10 && digit > int.MaxValue % 10)) {
                return (sign == 1) ? int.MaxValue : int.MinValue;
            }
            result = result * 10 + digit;
            i++;
        }
        
        return sign * result;
    }
}