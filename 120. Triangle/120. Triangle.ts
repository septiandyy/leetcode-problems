function minimumTotal(triangle: number[][]): number {
    let dp: number[] = [...triangle[triangle.length - 1]];
    
    for (let i = triangle.length - 2; i >= 0; i--) {
        for (let j = 0; j <= i; j++) {
            dp[j] = triangle[i][j] + Math.min(dp[j], dp[j + 1]);
        }
    }
    
    return dp[0];
}