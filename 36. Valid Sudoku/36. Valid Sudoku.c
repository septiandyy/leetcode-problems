bool isValidSudoku(char** board, int boardSize, int* boardColSize) {
    int rows[9][9] = {0};
    int cols[9][9] = {0};
    int boxes[9][9] = {0};
    
    for (int i = 0; i < 9; i++) {
        for (int j = 0; j < 9; j++) {
            if (board[i][j] != '.') {
                int num = board[i][j] - '1';
                int box_index = (i / 3) * 3 + j / 3;
                
                if (rows[i][num] || cols[j][num] || boxes[box_index][num]) {
                    return false;
                }
                
                rows[i][num] = cols[j][num] = boxes[box_index][num] = 1;
            }
        }
    }
    
    return true;
}