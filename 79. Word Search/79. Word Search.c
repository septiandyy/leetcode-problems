bool dfs(char** board, int m, int n, int i, int j, char* word, int wordIndex) {
    if (word[wordIndex] == '\0') return true;
    if (i < 0 || i >= m || j < 0 || j >= n || board[i][j] != word[wordIndex]) return false;
    
    char temp = board[i][j];
    board[i][j] = '#';
    
    bool found = dfs(board, m, n, i+1, j, word, wordIndex+1) ||
                 dfs(board, m, n, i-1, j, word, wordIndex+1) ||
                 dfs(board, m, n, i, j+1, word, wordIndex+1) ||
                 dfs(board, m, n, i, j-1, word, wordIndex+1);
    
    board[i][j] = temp;
    return found;
}

bool exist(char** board, int boardSize, int* boardColSize, char* word) {
    for (int i = 0; i < boardSize; i++) {
        for (int j = 0; j < boardColSize[0]; j++) {
            if (dfs(board, boardSize, boardColSize[0], i, j, word, 0)) {
                return true;
            }
        }
    }
    return false;
}