function spiralOrder(matrix: number[][]): number[] {
    if (matrix.length === 0 || matrix[0].length === 0) return [];
    
    const result: number[] = [];
    let [left, right, top, bottom] = [0, matrix[0].length - 1, 0, matrix.length - 1];
    
    while (left <= right && top <= bottom) {
        for (let i = left; i <= right; i++) {
            result.push(matrix[top][i]);
        }
        top++;
        
        for (let i = top; i <= bottom; i++) {
            result.push(matrix[i][right]);
        }
        right--;
        
        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                result.push(matrix[bottom][i]);
            }
            bottom--;
        }
        
        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                result.push(matrix[i][left]);
            }
            left++;
        }
    }
    
    return result;
}