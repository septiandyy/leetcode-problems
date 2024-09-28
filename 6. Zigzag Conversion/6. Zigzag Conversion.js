function convert(s, numRows) {
    // Edge case: if numRows is 1 or greater than the length of the string
    if (numRows === 1 || numRows >= s.length) {
        return s;
    }

    // Initialize an array of empty strings for each row
    let rows = Array.from({ length: numRows }, () => '');

    let currentRow = 0;
    let goingDown = false;

    // Traverse through the string
    for (let char of s) {
        // Append the character to the current row
        rows[currentRow] += char;

        // Change direction if we hit the top or bottom row
        if (currentRow === 0 || currentRow === numRows - 1) {
            goingDown = !goingDown;
        }

        // Move to the next row
        currentRow += goingDown ? 1 : -1;
    }

    // Concatenate all rows into one string and return
    return rows.join('');
}

// Example usage:
console.log(convert("PAYPALISHIRING", 3)); // Output: "PAHNAPLSIIGYIR"
console.log(convert("PAYPALISHIRING", 4)); // Output: "PINALSIGYAHRPI"
console.log(convert("A", 1));              // Output: "A"