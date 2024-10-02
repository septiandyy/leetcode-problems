function totalNQueens(n: number): number {
    const board: number[] = new Array(n).fill(0);
    return solveNQueens(board, 0, n);
}

function solveNQueens(board: number[], row: number, n: number): number {
    if (row === n) {
        return 1;
    }
    
    let count = 0;
    for (let col = 0; col < n; col++) {
        if (isSafe(board, row, col)) {
            board[row] = col;
            count += solveNQueens(board, row + 1, n);
        }
    }
    
    return count;
}

function isSafe(board: number[], row: number, col: number): boolean {
    for (let i = 0; i < row; i++) {
        if (board[i] === col || 
            board[i] - i === col - row || 
            board[i] + i === col + row) {
            return false;
        }
    }
    return true;
}