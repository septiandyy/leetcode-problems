function generateMatrix(n) {
    // Initialize the matrix with zeros
    const matrix = Array.from({ length: n }, () => Array(n).fill(0));

    let num = 1;
    let top = 0;
    let bottom = n - 1;
    let left = 0;
    let right = n - 1;

    while (top <= bottom && left <= right) {
        // Traverse from left to right
        for (let i = left; i <= right; i++) {
            matrix[top][i] = num++;
        }
        top++;

        // Traverse from top to bottom
        for (let i = top; i <= bottom; i++) {
            matrix[i][right] = num++;
        }
        right--;

        // Traverse from right to left (if still within bounds)
        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                matrix[bottom][i] = num++;
            }
            bottom--;
        }

        // Traverse from bottom to top (if still within bounds)
        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                matrix[i][left] = num++;
            }
            left++;
        }
    }

    return matrix;
}

// Example usage:
console.log(generateMatrix(3));
// Output: [[1,2,3],[8,9,4],[7,6,5]]

console.log(generateMatrix(1));
// Output: [[1]]