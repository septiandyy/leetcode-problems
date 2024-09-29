/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
void backtrack(char** result, int* returnSize, char* current, int open, int close, int max, int index) {
    if (index == max * 2) {
        result[*returnSize] = strdup(current);
        (*returnSize)++;
        return;
    }
    
    if (open < max) {
        current[index] = '(';
        backtrack(result, returnSize, current, open + 1, close, max, index + 1);
    }
    if (close < open) {
        current[index] = ')';
        backtrack(result, returnSize, current, open, close + 1, max, index + 1);
    }
}

char** generateParenthesis(int n, int* returnSize) {
    char** result = (char**)malloc(10000 * sizeof(char*));
    char* current = (char*)malloc((2 * n + 1) * sizeof(char));
    current[2 * n] = '\0';
    *returnSize = 0;
    
    backtrack(result, returnSize, current, 0, 0, n, 0);
    
    free(current);
    return result;
}