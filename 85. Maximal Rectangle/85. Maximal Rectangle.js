function maximalRectangle(matrix) {
    if (matrix.length === 0 || matrix[0].length === 0) return 0;
    
    const rows = matrix.length;
    const cols = matrix[0].length;
    let maxArea = 0;
    
    // Initialize height array
    const height = Array(cols).fill(0);
    
    for (let i = 0; i < rows; i++) {
        // Update the height array for the current row
        for (let j = 0; j < cols; j++) {
            height[j] = matrix[i][j] === '1' ? height[j] + 1 : 0;
        }
        
        // Calculate the maximum area of rectangle in histogram for the current row
        maxArea = Math.max(maxArea, getMaxRectangleArea(height));
    }
    
    return maxArea;
}

// Function to calculate the largest rectangle area in a histogram
function getMaxRectangleArea(heights) {
    const stack = [];
    let maxArea = 0;
    let index = 0;
    
    while (index < heights.length) {
        if (stack.length === 0 || heights[index] >= heights[stack[stack.length - 1]]) {
            stack.push(index++);
        } else {
            const topOfStack = stack.pop();
            const area = heights[topOfStack] * (stack.length === 0 ? index : index - stack[stack.length - 1] - 1);
            maxArea = Math.max(maxArea, area);
        }
    }
    
    while (stack.length > 0) {
        const topOfStack = stack.pop();
        const area = heights[topOfStack] * (stack.length === 0 ? index : index - stack[stack.length - 1] - 1);
        maxArea = Math.max(maxArea, area);
    }
    
    return maxArea;
}

// Example usage
const matrix1 = [
    ["1", "0", "1", "0", "0"],
    ["1", "0", "1", "1", "1"],
    ["1", "1", "1", "1", "1"],
    ["1", "0", "0", "1", "0"]
];
console.log(maximalRectangle(matrix1)); // Output: 6

const matrix2 = [["0"]];
console.log(maximalRectangle(matrix2)); // Output: 0

const matrix3 = [["1"]];
console.log(maximalRectangle(matrix3)); // Output: 1