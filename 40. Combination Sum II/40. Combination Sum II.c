#include <stdlib.h>
#include <string.h>

int compare(const void* a, const void* b) {
    return (*(int*)a - *(int*)b);
}

void backtrack(int* candidates, int candidatesSize, int target, int index, int* current, int currentSize, int** result, int* resultSize, int* resultCapacity, int** columnSizes) {
    if (target == 0) {
        if (*resultSize >= *resultCapacity) {
            *resultCapacity *= 2;
            result = realloc(result, *resultCapacity * sizeof(int*));
            *columnSizes = realloc(*columnSizes, *resultCapacity * sizeof(int));
        }
        result[*resultSize] = malloc(currentSize * sizeof(int));
        memcpy(result[*resultSize], current, currentSize * sizeof(int));
        (*columnSizes)[*resultSize] = currentSize;
        (*resultSize)++;
        return;
    }
    
    for (int i = index; i < candidatesSize; i++) {
        if (i > index && candidates[i] == candidates[i-1]) continue;
        if (candidates[i] > target) break;
        current[currentSize] = candidates[i];
        backtrack(candidates, candidatesSize, target - candidates[i], i + 1, current, currentSize + 1, result, resultSize, resultCapacity, columnSizes);
    }
}

int** combinationSum2(int* candidates, int candidatesSize, int target, int* returnSize, int** returnColumnSizes) {
    qsort(candidates, candidatesSize, sizeof(int), compare);
    
    int resultCapacity = 100;
    int** result = malloc(resultCapacity * sizeof(int*));
    *returnColumnSizes = malloc(resultCapacity * sizeof(int));
    *returnSize = 0;
    
    int* current = malloc(target * sizeof(int));
    backtrack(candidates, candidatesSize, target, 0, current, 0, result, returnSize, &resultCapacity, returnColumnSizes);
    
    free(current);
    return result;
}