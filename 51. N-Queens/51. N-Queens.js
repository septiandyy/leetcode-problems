function solveNQueens(n) {
    const results = [];
    const board = Array(n).fill().map(() => Array(n).fill('.'));

    const cols = new Set();
    const diag1 = new Set();
    const diag2 = new Set();

    function backtrack(row) {
        if (row === n) {
            const solution = board.map(row => row.join(''));
            results.push(solution);
            return;
        }

        for (let col = 0; col < n; col++) {
            const d1 = row - col;
            const d2 = row + col;

            if (cols.has(col) || diag1.has(d1) || diag2.has(d2)) {
                continue;
            }

            // Place the queen
            board[row][col] = 'Q';
            cols.add(col);
            diag1.add(d1);
            diag2.add(d2);

            // Recurse
            backtrack(row + 1);

            // Remove the queen
            board[row][col] = '.';
            cols.delete(col);
            diag1.delete(d1);
            diag2.delete(d2);
        }
    }

    backtrack(0);
    return results;
}

// Example Usage:
console.log(solveNQueens(4));
console.log(solveNQueens(1));