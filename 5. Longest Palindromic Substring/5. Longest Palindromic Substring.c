#include <string.h>

char* longestPalindrome(char* s) {
    int n = strlen(s);
    if (n < 2) return s;

    int start = 0, maxLength = 1;

    for (int i = 0; i < n; i++) {
        // Odd length palindromes
        int left = i, right = i;
        while (left >= 0 && right < n && s[left] == s[right]) {
            if (right - left + 1 > maxLength) {
                start = left;
                maxLength = right - left + 1;
            }
            left--;
            right++;
        }

        // Even length palindromes
        left = i; right = i + 1;
        while (left >= 0 && right < n && s[left] == s[right]) {
            if (right - left + 1 > maxLength) {
                start = left;
                maxLength = right - left + 1;
            }
            left--;
            right++;
        }
    }

    char* result = malloc(sizeof(char) * (maxLength + 1));
    strncpy(result, s + start, maxLength);
    result[maxLength] = '\0';
    return result;
}