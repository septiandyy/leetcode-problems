function generate(numRows) {
    // Initialize the Pascal's Triangle with the first row
    const triangle = [];
    
    for (let i = 0; i < numRows; i++) {
        // Start with a row filled with 1s
        const row = new Array(i + 1).fill(1);
        
        // Update the row values based on the previous row
        for (let j = 1; j < i; j++) {
            row[j] = triangle[i - 1][j - 1] + triangle[i - 1][j];
        }
        
        // Append the row to the triangle
        triangle.push(row);
    }
    
    return triangle;
}

// Examples
console.log(generate(5));
console.log(generate(1));