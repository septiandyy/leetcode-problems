#include <stdio.h>
#include <stdlib.h>
#include <string.h>

char* letterMap[] = {"", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"};

void backtrack(char* digits, int index, char* current, char** result, int* returnSize) {
    if (index == strlen(digits)) {
        result[*returnSize] = strdup(current);
        (*returnSize)++;
        return;
    }
    
    char* letters = letterMap[digits[index] - '0'];
    for (int i = 0; i < strlen(letters); i++) {
        current[index] = letters[i];
        backtrack(digits, index + 1, current, result, returnSize);
    }
}

char** letterCombinations(char* digits, int* returnSize) {
    *returnSize = 0;
    if (strlen(digits) == 0) return NULL;
    
    int totalCombinations = 1;
    for (int i = 0; i < strlen(digits); i++) {
        totalCombinations *= strlen(letterMap[digits[i] - '0']);
    }
    
    char** result = (char**)malloc(totalCombinations * sizeof(char*));
    char* current = (char*)malloc((strlen(digits) + 1) * sizeof(char));
    current[strlen(digits)] = '\0';
    
    backtrack(digits, 0, current, result, returnSize);
    
    free(current);
    return result;
}