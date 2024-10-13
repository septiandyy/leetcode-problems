/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume caller calls free().
 */

#include <stdlib.h>
#include <string.h>

int compare(const void* a, const void* b) {
    return (*(int*)a - *(int*)b);
}

void backtrack(int* nums, int numsSize, int start, int* current, int currentSize, int** result, int* resultSize, int** columnSizes) {
    result[*resultSize] = malloc(currentSize * sizeof(int));
    memcpy(result[*resultSize], current, currentSize * sizeof(int));
    (*columnSizes)[*resultSize] = currentSize;
    (*resultSize)++;

    for (int i = start; i < numsSize; i++) {
        if (i > start && nums[i] == nums[i-1]) continue;
        current[currentSize] = nums[i];
        backtrack(nums, numsSize, i + 1, current, currentSize + 1, result, resultSize, columnSizes);
    }
}

int** subsetsWithDup(int* nums, int numsSize, int* returnSize, int** returnColumnSizes) {
    qsort(nums, numsSize, sizeof(int), compare);
    
    int maxSize = 1 << numsSize;
    int** result = malloc(maxSize * sizeof(int*));
    *returnColumnSizes = malloc(maxSize * sizeof(int));
    *returnSize = 0;
    
    int* current = malloc(numsSize * sizeof(int));
    
    backtrack(nums, numsSize, 0, current, 0, result, returnSize, returnColumnSizes);
    
    free(current);
    return result;
}