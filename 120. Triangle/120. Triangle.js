function minimumTotal(triangle) {
    const n = triangle.length;
    
    // Start from the second to last row and go upwards
    for (let row = n - 2; row >= 0; row--) {
        for (let col = 0; col <= row; col++) {
            // Update the value of triangle[row][col] to the minimum path sum
            triangle[row][col] += Math.min(triangle[row + 1][col], triangle[row + 1][col + 1]);
        }
    }
    
    // The top element of the triangle now contains the minimum path sum
    return triangle[0][0];
}

// Example usage:
console.log(minimumTotal([[2],[3,4],[6,5,7],[4,1,8,3]])); // Output: 11
console.log(minimumTotal([[-10]])); // Output: -10