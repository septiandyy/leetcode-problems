#include <string.h>

char* longestCommonPrefix(char** strs, int strsSize) {
    if (strsSize == 0) return "";
    
    int minLen = strlen(strs[0]);
    for (int i = 1; i < strsSize; i++) {
        int len = strlen(strs[i]);
        if (len < minLen) minLen = len;
    }
    
    for (int i = 0; i < minLen; i++) {
        char c = strs[0][i];
        for (int j = 1; j < strsSize; j++) {
            if (strs[j][i] != c) {
                strs[0][i] = '\0';
                return strs[0];
            }
        }
    }
    
    strs[0][minLen] = '\0';
    return strs[0];
}