public class Solution {
    public int TotalNQueens(int n) {
        return SolveNQueens(new int[n], 0, n);
    }
    
    private int SolveNQueens(int[] board, int row, int n) {
        if (row == n) {
            return 1;
        }
        
        int count = 0;
        for (int col = 0; col < n; col++) {
            if (IsSafe(board, row, col)) {
                board[row] = col;
                count += SolveNQueens(board, row + 1, n);
            }
        }
        
        return count;
    }
    
    private bool IsSafe(int[] board, int row, int col) {
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