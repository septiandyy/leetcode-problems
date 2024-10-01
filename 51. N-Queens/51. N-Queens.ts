function solveNQueens(n: number): string[][] {
    const result: string[][] = [];
    const board: string[] = new Array(n).fill('.'.repeat(n));

    function isSafe(row: number, col: number): boolean {
        for (let i = 0; i < col; i++) {
            if (board[row][i] === 'Q') return false;
        }
        for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
            if (board[i][j] === 'Q') return false;
        }
        for (let i = row, j = col; i < n && j >= 0; i++, j--) {
            if (board[i][j] === 'Q') return false;
        }
        return true;
    }

    function solve(col: number): void {
        if (col === n) {
            result.push([...board]);
            return;
        }
        for (let row = 0; row < n; row++) {
            if (isSafe(row, col)) {
                board[row] = board[row].substring(0, col) + 'Q' + board[row].substring(col + 1);
                solve(col + 1);
                board[row] = board[row].substring(0, col) + '.' + board[row].substring(col + 1);
            }
        }
    }

    solve(0);
    return result;
}