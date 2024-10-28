int minimumTotal(int** triangle, int triangleSize, int* triangleColSize) {
    int* dp = (int*)malloc(triangleSize * sizeof(int));
    
    // Initialize dp with the last row
    for (int j = 0; j < triangleSize; j++) {
        dp[j] = triangle[triangleSize-1][j];
    }
    
    // Bottom-up DP
    for (int i = triangleSize-2; i >= 0; i--) {
        for (int j = 0; j <= i; j++) {
            dp[j] = triangle[i][j] + fmin(dp[j], dp[j+1]);
        }
    }
    
    int result = dp[0];
    free(dp);
    return result;
}