function generateMatrix(n: number): number[][] {
    const matrix: number[][] = Array(n).fill(0).map(() => Array(n).fill(0));
    let left: number = 0, right: number = n - 1, top: number = 0, bottom: number = n - 1;
    let num: number = 1;
    
    while (left <= right && top <= bottom) {
        for (let i = left; i <= right; i++)
            matrix[top][i] = num++;
        top++;
        
        for (let i = top; i <= bottom; i++)
            matrix[i][right] = num++;
        right--;
        
        if (top <= bottom) {
            for (let i = right; i >= left; i--)
                matrix[bottom][i] = num++;
            bottom--;
        }
        
        if (left <= right) {
            for (let i = bottom; i >= top; i--)
                matrix[i][left] = num++;
            left++;
        }
    }
    
    return matrix;
}