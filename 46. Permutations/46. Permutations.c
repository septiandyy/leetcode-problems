/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume caller calls free().
 */
void swap(int* a, int* b) {
    int temp = *a;
    *a = *b;
    *b = temp;
}

void backtrack(int* nums, int numsSize, int start, int** result, int* returnSize, int** returnColumnSizes) {
    if (start == numsSize) {
        result[*returnSize] = (int*)malloc(numsSize * sizeof(int));
        memcpy(result[*returnSize], nums, numsSize * sizeof(int));
        (*returnColumnSizes)[*returnSize] = numsSize;
        (*returnSize)++;
        return;
    }
    
    for (int i = start; i < numsSize; i++) {
        swap(&nums[start], &nums[i]);
        backtrack(nums, numsSize, start + 1, result, returnSize, returnColumnSizes);
        swap(&nums[start], &nums[i]);
    }
}

int** permute(int* nums, int numsSize, int* returnSize, int** returnColumnSizes) {
    int totalPermutations = 1;
    for (int i = 2; i <= numsSize; i++) {
        totalPermutations *= i;
    }
    
    int** result = (int**)malloc(totalPermutations * sizeof(int*));
    *returnColumnSizes = (int*)malloc(totalPermutations * sizeof(int));
    *returnSize = 0;
    
    backtrack(nums, numsSize, 0, result, returnSize, returnColumnSizes);
    
    return result;
}