class Solution {
    public int totalNQueens(int n) {
        int[] board = new int[n];
        return solveNQueens(board, 0, n);
    }
    
    private int solveNQueens(int[] board, int row, int n) {
        if (row == n) {
            return 1;
        }
        
        int count = 0;
        for (int col = 0; col < n; col++) {
            if (isSafe(board, row, col)) {
                board[row] = col;
                count += solveNQueens(board, row + 1, n);
            }
        }
        
        return count;
    }
    
    private boolean isSafe(int[] board, int row, int col) {
        for (int i = 0; i < row; i++) {
            if (board[i] == col || 
                board[i] - i == col - row || 
                board[i] + i == col + row) {
                return false;
            }
        }
        return true;
    }
}