// Time: O(n^2), Space: O(n^2)
int** generate(int numRows, int* returnSize, int** returnColumnSizes) {
    *returnSize = numRows;
    *returnColumnSizes = (int*)malloc(numRows * sizeof(int));
    int** result = (int**)malloc(numRows * sizeof(int*));
    
    for (int i = 0; i < numRows; i++) {
        (*returnColumnSizes)[i] = i + 1;
        result[i] = (int*)malloc((i + 1) * sizeof(int));
        result[i][0] = result[i][i] = 1;
        
        for (int j = 1; j < i; j++) {
            result[i][j] = result[i-1][j-1] + result[i-1][j];
        }
    }
    
    return result;
}