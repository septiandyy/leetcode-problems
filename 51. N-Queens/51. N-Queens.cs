public class Solution {
    public IList<IList<string>> SolveNQueens(int n) {
        var result = new List<IList<string>>();
        var board = new char[n][];
        for (int i = 0; i < n; i++) {
            board[i] = new char[n];
            Array.Fill(board[i], '.');
        }
        
        Solve(board, 0, result);
        return result;
    }
    
    private void Solve(char[][] board, int col, IList<IList<string>> result) {
        if (col == board.Length) {
            result.Add(board.Select(row => new string(row)).ToList());
            return;
        }
        
        for (int row = 0; row < board.Length; row++) {
            if (IsSafe(board, row, col)) {
                board[row][col] = 'Q';
                Solve(board, col + 1, result);
                board[row][col] = '.';
            }
        }
    }
    
    private bool IsSafe(char[][] board, int row, int col) {
        for (int i = 0; i < col; i++)
            if (board[row][i] == 'Q') return false;
        
        for (int i = row, j = col; i >= 0 && j >= 0; i--, j--)
            if (board[i][j] == 'Q') return false;
        
        for (int i = row, j = col; j >= 0 && i < board.Length; i++, j--)
            if (board[i][j] == 'Q') return false;
        
        return true;
    }
}