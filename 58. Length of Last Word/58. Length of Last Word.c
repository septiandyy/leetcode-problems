#include <string.h>

int lengthOfLastWord(char* s) {
    int length = strlen(s);
    int lastWordLength = 0;
    
    // Start from the end of the string
    for (int i = length - 1; i >= 0; i--) {
        // If we encounter a non-space character
        if (s[i] != ' ') {
            lastWordLength++;
        }
        // If we've found the last word and encounter a space
        else if (lastWordLength > 0) {
            break;
        }
    }
    
    return lastWordLength;
}