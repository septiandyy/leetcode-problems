function totalNQueens(n) {
    let count = 0;

    function backtrack(row, cols, diag1, diag2) {
        if (row === n) {
            count++;
            return;
        }

        for (let col = 0; col < n; col++) {
            const d1 = row - col + (n - 1); // Diagonal from top-left to bottom-right
            const d2 = row + col; // Diagonal from bottom-left to top-right

            if (!cols[col] && !diag1[d1] && !diag2[d2]) {
                // Place queen
                cols[col] = diag1[d1] = diag2[d2] = true;
                backtrack(row + 1, cols, diag1, diag2);
                // Remove queen
                cols[col] = diag1[d1] = diag2[d2] = false;
            }
        }
    }

    backtrack(0, Array(n).fill(false), Array(2 * n - 1).fill(false), Array(2 * n - 1).fill(false));
    return count;
}

// Example usage
console.log(totalNQueens(4)); // Output: 2
console.log(totalNQueens(1)); // Output: 1