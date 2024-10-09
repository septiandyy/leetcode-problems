#include <stdlib.h>
#include <string.h>

char* minWindow(char* s, char* t) {
    int sLen = strlen(s), tLen = strlen(t);
    int need[128] = {0}, have[128] = {0};
    int needCount = 0, haveCount = 0;
    int left = 0, start = 0, minLen = sLen + 1;

    for (int i = 0; i < tLen; i++) {
        if (need[t[i]]++ == 0) needCount++;
    }

    for (int right = 0; right < sLen; right++) {
        if (++have[s[right]] == need[s[right]]) haveCount++;

        while (haveCount == needCount) {
            if (right - left + 1 < minLen) {
                start = left;
                minLen = right - left + 1;
            }
            if (--have[s[left]] < need[s[left]]) haveCount--;
            left++;
        }
    }

    if (minLen > sLen) return "";
    char* result = (char*)malloc((minLen + 1) * sizeof(char));
    strncpy(result, s + start, minLen);
    result[minLen] = '\0';
    return result;
}