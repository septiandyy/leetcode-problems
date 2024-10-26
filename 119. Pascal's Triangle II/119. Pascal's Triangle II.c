int* getRow(int rowIndex, int* returnSize) {
    *returnSize = rowIndex + 1;
    int* result = (int*)malloc((*returnSize) * sizeof(int));
    
    // Initialize first element
    result[0] = 1;
    
    // Calculate each element using combination formula
    for (int i = 1; i <= rowIndex; i++) {
        // Calculate using (n, k) = (n, k-1) * (n-k+1) / k
        long long prev = result[0];
        for (int j = 1; j < i; j++) {
            long long temp = result[j];
            result[j] = (prev * (rowIndex - j + 1)) / j;
            prev = temp;
        }
        result[i] = 1;
    }
    
    return result;
}