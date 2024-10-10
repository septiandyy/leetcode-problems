impl Solution {
    pub fn exist(board: Vec<Vec<char>>, word: String) -> bool {
        let word = word.chars().collect::<Vec<char>>();
        for i in 0..board.len() {
            for j in 0..board[0].len() {
                if Self::dfs(&mut board.clone(), i, j, &word, 0) {
                    return true;
                }
            }
        }
        false
    }
    
    fn dfs(board: &mut Vec<Vec<char>>, i: usize, j: usize, word: &Vec<char>, k: usize) -> bool {
        if k == word.len() {
            return true;
        }
        if i >= board.len() || j >= board[0].len() || board[i][j] != word[k] {
            return false;
        }
        
        let temp = board[i][j];
        board[i][j] = '#';
        let found = (i > 0 && Self::dfs(board, i-1, j, word, k+1)) ||
                    (j > 0 && Self::dfs(board, i, j-1, word, k+1)) ||
                    Self::dfs(board, i+1, j, word, k+1) ||
                    Self::dfs(board, i, j+1, word, k+1);
        board[i][j] = temp;
        found
    }
}