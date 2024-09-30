public class Solution {
    public void SolveSudoku(char[][] board) {
        Solve(board);
    }
    
    private bool IsValid(char[][] board, int row, int col, char num) {
        for (int x = 0; x < 9; x++) {
            if (board[row][x] == num) return false;
            if (board[x][col] == num) return false;
            if (board[3 * (row / 3) + x / 3][3 * (col / 3) + x % 3] == num) return false;
        }
        return true;
    }
    
    private bool Solve(char[][] board) {
        for (int row = 0; row < 9; row++) {
            for (int col = 0; col < 9; col++) {
                if (board[row][col] == '.') {
                    for (char num = '1'; num <= '9'; num++) {
                        if (IsValid(board, row, col, num)) {
                            board[row][col] = num;
                            if (Solve(board)) return true;
                            board[row][col] = '.';
                        }
                    }
                    return false;
                }
            }
        }
        return true;
    }
}