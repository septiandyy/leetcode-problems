class Solution {
public:
    bool exist(vector<vector<char>>& board, string word) {
        for (int i = 0; i < board.size(); i++) {
            for (int j = 0; j < board[0].size(); j++) {
                if (dfs(board, i, j, word, 0)) return true;
            }
        }
        return false;
    }
    
private:
    bool dfs(vector<vector<char>>& board, int i, int j, string& word, int k) {
        if (k == word.length()) return true;
        if (i < 0 || i >= board.size() || j < 0 || j >= board[0].size() || board[i][j] != word[k]) return false;
        
        char temp = board[i][j];
        board[i][j] = '#';
        bool found = dfs(board, i+1, j, word, k+1) ||
                     dfs(board, i-1, j, word, k+1) ||
                     dfs(board, i, j+1, word, k+1) ||
                     dfs(board, i, j-1, word, k+1);
        board[i][j] = temp;
        return found;
    }
};