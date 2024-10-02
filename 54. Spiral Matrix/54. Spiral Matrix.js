function spiralOrder(matrix) {
    let result = [];
    if (matrix.length === 0) return result;

    let top = 0, bottom = matrix.length - 1;
    let left = 0, right = matrix[0].length - 1;

    while (top <= bottom && left <= right) {
        // Traverse from left to right along the top row
        for (let i = left; i <= right; i++) {
            result.push(matrix[top][i]);
        }
        top++;

        // Traverse from top to bottom along the right column
        for (let i = top; i <= bottom; i++) {
            result.push(matrix[i][right]);
        }
        right--;

        // Traverse from right to left along the bottom row
        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                result.push(matrix[bottom][i]);
            }
            bottom--;
        }

        // Traverse from bottom to top along the left column
        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                result.push(matrix[i][left]);
            }
            left++;
        }
    }

    return result;
}

// Example usage:
let matrix1 = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(spiralOrder(matrix1)); // Output: [1, 2, 3, 6, 9, 8, 7, 4, 5]

let matrix2 = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
];
console.log(spiralOrder(matrix2)); // Output: [1, 2, 3, 4, 8, 12, 11, 10, 9, 5, 6, 7]