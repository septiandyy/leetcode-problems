#include <stdbool.h>
#include <ctype.h>
#include <string.h>

bool isNumber(char* s) {
    int i = 0;
    int len = strlen(s);
    bool seenDigit = false;
    bool seenDot = false;
    bool seenE = false;
    
    // Handle sign
    if (s[i] == '+' || s[i] == '-') i++;
    
    for (; i < len; i++) {
        if (isdigit(s[i])) {
            seenDigit = true;
        } else if (s[i] == '.') {
            if (seenDot || seenE) return false;
            seenDot = true;
        } else if (s[i] == 'e' || s[i] == 'E') {
            if (seenE || !seenDigit) return false;
            seenE = true;
            seenDigit = false;
            if (i + 1 < len && (s[i+1] == '+' || s[i+1] == '-')) i++;
        } else {
            return false;
        }
    }
    
    return seenDigit;
}