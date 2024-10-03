#include <stdlib.h>

int cmp(const void* a, const void* b) {
    return (*(int**)a)[0] - (*(int**)b)[0];
}

int** merge(int** intervals, int intervalsSize, int* intervalsColSize, int* returnSize, int** returnColumnSizes) {
    if (intervalsSize == 0) {
        *returnSize = 0;
        return NULL;
    }

    qsort(intervals, intervalsSize, sizeof(int*), cmp);

    int** result = malloc(intervalsSize * sizeof(int*));
    *returnColumnSizes = malloc(intervalsSize * sizeof(int));
    int index = 0;

    for (int i = 0; i < intervalsSize; i++) {
        if (index == 0 || intervals[i][0] > result[index-1][1]) {
            result[index] = malloc(2 * sizeof(int));
            result[index][0] = intervals[i][0];
            result[index][1] = intervals[i][1];
            (*returnColumnSizes)[index] = 2;
            index++;
        } else {
            if (intervals[i][1] > result[index-1][1]) {
                result[index-1][1] = intervals[i][1];
            }
        }
    }

    *returnSize = index;
    return result;
}