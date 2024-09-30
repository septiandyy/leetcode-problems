function solveSudoku(board) {
    function isValid(board, row, col, num) {
        // Check if the number is not repeated in the current row
        for (let i = 0; i < 9; i++) {
            if (board[row][i] === num) return false;
        }
        // Check if the number is not repeated in the current column
        for (let i = 0; i < 9; i++) {
            if (board[i][col] === num) return false;
        }
        // Check if the number is not repeated in the current 3x3 sub-box
        const startRow = Math.floor(row / 3) * 3;
        const startCol = Math.floor(col / 3) * 3;
        for (let i = startRow; i < startRow + 3; i++) {
            for (let j = startCol; j < startCol + 3; j++) {
                if (board[i][j] === num) return false;
            }
        }
        return true;
    }

    function solve(board) {
        for (let row = 0; row < 9; row++) {
            for (let col = 0; col < 9; col++) {
                if (board[row][col] === '.') {
                    for (let num = 1; num <= 9; num++) {
                        const numStr = num.toString();
                        if (isValid(board, row, col, numStr)) {
                            board[row][col] = numStr; // Try this number
                            if (solve(board)) {
                                return true; // Solved
                            }
                            board[row][col] = '.'; // Reset and try another number
                        }
                    }
                    return false; // No valid number found, need to backtrack
                }
            }
        }
        return true; // Solved
    }

    solve(board);
}

// Example usage:
const board = [
    ["5","3",".",".","7",".",".",".","."],
    ["6",".",".","1","9","5",".",".","."],
    [".","9","8",".",".",".",".","6","."],
    ["8",".",".",".","6",".",".",".","3"],
    ["4",".",".","8",".","3",".",".","1"],
    ["7",".",".",".","2",".",".",".","6"],
    [".","6",".",".",".",".","2","8","."],
    [".",".",".","4","1","9",".",".","5"],
    [".",".",".",".","8",".",".","7","9"]
];

solveSudoku(board);
console.log(board);