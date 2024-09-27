#include <stdio.h>
#include <string.h>

int lengthOfLongestSubstring(char *s) {
    int n = strlen(s);
    int index[128] = {0};  // To store the last seen index of each character
    int maxLen = 0, start = 0;
    
    for (int end = 0; end < n; end++) {
        start = (index[s[end]] > start) ? index[s[end]] : start;
        maxLen = (end - start + 1 > maxLen) ? end - start + 1 : maxLen;
        index[s[end]] = end + 1;
    }
    return maxLen;
}