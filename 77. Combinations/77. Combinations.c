/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume caller calls free().
 */
int** combine(int n, int k, int* returnSize, int** returnColumnSizes) {
    int maxCombinations = 1;
    for (int i = 0; i < k; i++) {
        maxCombinations *= (n - i);
        maxCombinations /= (i + 1);
    }
    
    int** result = (int**)malloc(maxCombinations * sizeof(int*));
    *returnColumnSizes = (int*)malloc(maxCombinations * sizeof(int));
    *returnSize = 0;
    
    int* combination = (int*)malloc(k * sizeof(int));
    
    void backtrack(int start, int depth) {
        if (depth == k) {
            result[*returnSize] = (int*)malloc(k * sizeof(int));
            memcpy(result[*returnSize], combination, k * sizeof(int));
            (*returnColumnSizes)[*returnSize] = k;
            (*returnSize)++;
            return;
        }
        
        for (int i = start; i <= n; i++) {
            combination[depth] = i;
            backtrack(i + 1, depth + 1);
        }
    }
    
    backtrack(1, 0);
    free(combination);
    return result;
}