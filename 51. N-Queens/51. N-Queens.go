func solveNQueens(n int) [][]string {
    var result [][]string
    board := make([]string, n)
    for i := range board {
        board[i] = strings.Repeat(".", n)
    }
    solve(board, 0, &result)
    return result
}

func solve(board []string, col int, result *[][]string) {
    if col == len(board) {
        *result = append(*result, append([]string{}, board...))
        return
    }
    
    for row := 0; row < len(board); row++ {
        if isSafe(board, row, col) {
            board[row] = board[row][:col] + "Q" + board[row][col+1:]
            solve(board, col+1, result)
            board[row] = board[row][:col] + "." + board[row][col+1:]
        }
    }
}

func isSafe(board []string, row, col int) bool {
    for i := 0; i < col; i++ {
        if board[row][i] == 'Q' {
            return false
        }
    }
    
    for i, j := row, col; i >= 0 && j >= 0; i, j = i-1, j-1 {
        if board[i][j] == 'Q' {
            return false
        }
    }
    
    for i, j := row, col; j >= 0 && i < len(board); i, j = i+1, j-1 {
        if board[i][j] == 'Q' {
            return false
        }
    }
    
    return true
}