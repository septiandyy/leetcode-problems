function exist(board: string[][], word: string): boolean {
    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (dfs(board, i, j, word, 0)) return true;
        }
    }
    return false;
}

function dfs(board: string[][], i: number, j: number, word: string, k: number): boolean {
    if (k === word.length) return true;
    if (i < 0 || i >= board.length || j < 0 || j >= board[0].length || board[i][j] !== word[k]) return false;
    
    const temp = board[i][j];
    board[i][j] = '#';
    const found = dfs(board, i+1, j, word, k+1) ||
                  dfs(board, i-1, j, word, k+1) ||
                  dfs(board, i, j+1, word, k+1) ||
                  dfs(board, i, j-1, word, k+1);
    board[i][j] = temp;
    return found;
}