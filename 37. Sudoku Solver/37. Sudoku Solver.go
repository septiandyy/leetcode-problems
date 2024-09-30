func solveSudoku(board [][]byte)  {
    solve(board)
}

func isValid(board [][]byte, row, col int, num byte) bool {
    for x := 0; x < 9; x++ {
        if board[row][x] == num { return false }
        if board[x][col] == num { return false }
        if board[3*(row/3) + x/3][3*(col/3) + x%3] == num { return false }
    }
    return true
}

func solve(board [][]byte) bool {
    for row := 0; row < 9; row++ {
        for col := 0; col < 9; col++ {
            if board[row][col] == '.' {
                for num := byte('1'); num <= '9'; num++ {
                    if isValid(board, row, col, num) {
                        board[row][col] = num
                        if solve(board) { return true }
                        board[row][col] = '.'
                    }
                }
                return false
            }
        }
    }
    return true
}