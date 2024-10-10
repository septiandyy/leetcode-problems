func exist(board [][]byte, word string) bool {
    for i := 0; i < len(board); i++ {
        for j := 0; j < len(board[0]); j++ {
            if dfs(board, i, j, word, 0) {
                return true
            }
        }
    }
    return false
}

func dfs(board [][]byte, i, j int, word string, k int) bool {
    if k == len(word) {
        return true
    }
    if i < 0 || i >= len(board) || j < 0 || j >= len(board[0]) || board[i][j] != word[k] {
        return false
    }
    
    temp := board[i][j]
    board[i][j] = '#'
    found := dfs(board, i+1, j, word, k+1) ||
             dfs(board, i-1, j, word, k+1) ||
             dfs(board, i, j+1, word, k+1) ||
             dfs(board, i, j-1, word, k+1)
    board[i][j] = temp
    return found
}