#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <stdbool.h>

#define MAX_IP_COUNT 1000
#define MAX_IP_LENGTH 16

bool isValidPart(const char* s, int start, int end) {
    int len = end - start;
    if (len > 3 || len == 0) return false;
    if (len > 1 && s[start] == '0') return false;
    int num = 0;
    for (int i = start; i < end; i++) {
        num = num * 10 + (s[i] - '0');
    }
    return num <= 255;
}

void backtrack(const char* s, int start, int dots, char* current, int currentLen, char** result, int* returnSize) {
    int len = strlen(s);
    if (dots == 3) {
        if (isValidPart(s, start, len)) {
            strncpy(current + currentLen, s + start, len - start);
            current[currentLen + len - start] = '\0';
            result[*returnSize] = strdup(current);
            (*returnSize)++;
        }
        return;
    }
    
    for (int i = start; i < len && i < start + 3; i++) {
        if (isValidPart(s, start, i + 1)) {
            int partLen = i - start + 1;
            if (currentLen + partLen + 1 < MAX_IP_LENGTH) {
                strncpy(current + currentLen, s + start, partLen);
                current[currentLen + partLen] = '.';
                current[currentLen + partLen + 1] = '\0';
                backtrack(s, i + 1, dots + 1, current, currentLen + partLen + 1, result, returnSize);
            }
        }
    }
}

char** restoreIpAddresses(char* s, int* returnSize) {
    char** result = (char**)malloc(MAX_IP_COUNT * sizeof(char*));
    char* current = (char*)malloc(MAX_IP_LENGTH * sizeof(char));
    *returnSize = 0;
    current[0] = '\0';
    
    backtrack(s, 0, 0, current, 0, result, returnSize);
    
    free(current);
    return result;
}

// Don't forget to free the memory after using the result
void freeResult(char** result, int returnSize) {
    for (int i = 0; i < returnSize; i++) {
        free(result[i]);
    }
    free(result);
}