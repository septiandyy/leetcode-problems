/**
 * Return an array of arrays of size *returnSize.
 * The sizes of the arrays are returned as *returnColumnSizes array.
 * Note: Both returned array and *columnSizes array must be malloced, assume caller calls free().
 */
int** subsets(int* nums, int numsSize, int* returnSize, int** returnColumnSizes) {
    int maxSubsets = 1 << numsSize;
    int** result = (int**)malloc(maxSubsets * sizeof(int*));
    *returnColumnSizes = (int*)malloc(maxSubsets * sizeof(int));
    *returnSize = 0;
    
    for (int i = 0; i < maxSubsets; i++) {
        int count = 0;
        for (int j = 0; j < numsSize; j++) {
            if (i & (1 << j)) count++;
        }
        
        result[*returnSize] = (int*)malloc(count * sizeof(int));
        (*returnColumnSizes)[*returnSize] = count;
        
        int index = 0;
        for (int j = 0; j < numsSize; j++) {
            if (i & (1 << j)) {
                result[*returnSize][index++] = nums[j];
            }
        }
        
        (*returnSize)++;
    }
    
    return result;
}