function getRow(rowIndex) {
    // Initialize the row as [1] for rowIndex 0
    let row = [1];
    
    // Build the row incrementally
    for (let i = 1; i <= rowIndex; i++) {
        // Update the row in reverse order to avoid overwriting values we need
        for (let j = i - 1; j > 0; j--) {
            row[j] = row[j] + row[j - 1];
        }
        // Append a new '1' at the end of the row
        row.push(1);
    }
    
    return row;
}

// Example usage:
console.log(getRow(3)); // Output: [1, 3, 3, 1]
console.log(getRow(0)); // Output: [1]
console.log(getRow(1)); // Output: [1, 1]