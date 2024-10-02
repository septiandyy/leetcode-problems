func totalNQueens(n int) int {
    board := make([]int, n)
    return solveNQueens(board, 0, n)
}

func solveNQueens(board []int, row, n int) int {
    if row == n {
        return 1
    }
    
    count := 0
    for col := 0; col < n; col++ {
        if isSafe(board, row, col) {
            board[row] = col
            count += solveNQueens(board, row+1, n)
        }
    }
    
    return count
}

func isSafe(board []int, row, col int) bool {
    for i := 0; i < row; i++ {
        if board[i] == col || 
           board[i]-i == col-row || 
           board[i]+i == col+row {
            return false
        }
    }
    return true
}