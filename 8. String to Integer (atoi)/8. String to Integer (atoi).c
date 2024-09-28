#include <limits.h>
#include <ctype.h>

int myAtoi(char * s) {
    int i = 0, sign = 1, result = 0;
    
    // Step 1: Ignore leading whitespace
    while (s[i] == ' ') i++;
    
    // Step 2: Check for sign
    if (s[i] == '-' || s[i] == '+') {
        sign = (s[i] == '-') ? -1 : 1;
        i++;
    }
    
    // Step 3: Convert digits
    while (s[i] >= '0' && s[i] <= '9') {
        // Check for overflow
        if (result > INT_MAX / 10 || (result == INT_MAX / 10 && s[i] - '0' > INT_MAX % 10)) {
            return (sign == 1) ? INT_MAX : INT_MIN;
        }
        result = result * 10 + (s[i] - '0');
        i++;
    }
    
    return sign * result;
}