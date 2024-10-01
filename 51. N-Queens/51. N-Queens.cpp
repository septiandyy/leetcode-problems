class Solution {
public:
    vector<vector<string>> solveNQueens(int n) {
        vector<vector<string>> result;
        vector<string> board(n, string(n, '.'));
        solve(board, 0, result);
        return result;
    }
    
private:
    void solve(vector<string>& board, int col, vector<vector<string>>& result) {
        if (col == board.size()) {
            result.push_back(board);
            return;
        }
        
        for (int row = 0; row < board.size(); row++) {
            if (isSafe(board, row, col)) {
                board[row][col] = 'Q';
                solve(board, col + 1, result);
                board[row][col] = '.';
            }
        }
    }
    
    bool isSafe(const vector<string>& board, int row, int col) {
        for (int i = 0; i < col; i++)
            if (board[row][i] == 'Q') return false;
        
        for (int i = row, j = col; i >= 0 && j >= 0; i--, j--)
            if (board[i][j] == 'Q') return false;
        
        for (int i = row, j = col; j >= 0 && i < board.size(); i++, j--)
            if (board[i][j] == 'Q') return false;
        
        return true;
    }
};