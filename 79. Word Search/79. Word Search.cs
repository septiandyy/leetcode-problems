public class Solution {
    public bool Exist(char[][] board, string word) {
        int m = board.Length, n = board[0].Length;
        for (int i = 0; i < m; i++) {
            for (int j = 0; j < n; j++) {
                if (DFS(board, i, j, word, 0)) return true;
            }
        }
        return false;
    }
    
    private bool DFS(char[][] board, int i, int j, string word, int k) {
        if (k == word.Length) return true;
        if (i < 0 || i >= board.Length || j < 0 || j >= board[0].Length || board[i][j] != word[k]) return false;
        
        char temp = board[i][j];
        board[i][j] = '#';
        bool found = DFS(board, i+1, j, word, k+1) ||
                     DFS(board, i-1, j, word, k+1) ||
                     DFS(board, i, j+1, word, k+1) ||
                     DFS(board, i, j-1, word, k+1);
        board[i][j] = temp;
        return found;
    }
}