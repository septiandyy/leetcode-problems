#include <stdlib.h>
#include <string.h>

int cmp(const void* a, const void* b) {
    return (*(int*)a - *(int*)b);
}

int** fourSum(int* nums, int numsSize, int target, int* returnSize, int** returnColumnSizes) {
    qsort(nums, numsSize, sizeof(int), cmp);
    
    int maxSize = numsSize * numsSize * numsSize;
    int** result = (int**)malloc(maxSize * sizeof(int*));
    *returnColumnSizes = (int*)malloc(maxSize * sizeof(int));
    *returnSize = 0;
    
    for (int a = 0; a < numsSize - 3; a++) {
        if (a > 0 && nums[a] == nums[a-1]) continue;
        for (int b = a + 1; b < numsSize - 2; b++) {
            if (b > a + 1 && nums[b] == nums[b-1]) continue;
            int c = b + 1;
            int d = numsSize - 1;
            while (c < d) {
                long long sum = (long long)nums[a] + nums[b] + nums[c] + nums[d];
                if (sum == target) {
                    result[*returnSize] = (int*)malloc(4 * sizeof(int));
                    result[*returnSize][0] = nums[a];
                    result[*returnSize][1] = nums[b];
                    result[*returnSize][2] = nums[c];
                    result[*returnSize][3] = nums[d];
                    (*returnColumnSizes)[*returnSize] = 4;
                    (*returnSize)++;
                    while (c < d && nums[c] == nums[c+1]) c++;
                    while (c < d && nums[d] == nums[d-1]) d--;
                    c++; d--;
                } else if (sum < target) {
                    c++;
                } else {
                    d--;
                }
            }
        }
    }
    
    return result;
}