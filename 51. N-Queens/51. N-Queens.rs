impl Solution {
    pub fn solve_n_queens(n: i32) -> Vec<Vec<String>> {
        let mut result = Vec::new();
        let mut board = vec![vec!['.'; n as usize]; n as usize];
        Self::solve(&mut board, 0, &mut result);
        result
    }
    
    fn solve(board: &mut Vec<Vec<char>>, col: usize, result: &mut Vec<Vec<String>>) {
        if col == board.len() {
            result.push(board.iter().map(|row| row.iter().collect()).collect());
            return;
        }
        
        for row in 0..board.len() {
            if Self::is_safe(board, row, col) {
                board[row][col] = 'Q';
                Self::solve(board, col + 1, result);
                board[row][col] = '.';
            }
        }
    }
    
    fn is_safe(board: &Vec<Vec<char>>, row: usize, col: usize) -> bool {
        for i in 0..col {
            if board[row][i] == 'Q' {
                return false;
            }
        }
        
        let (mut i, mut j) = (row, col);
        while i > 0 && j > 0 {
            i -= 1;
            j -= 1;
            if board[i][j] == 'Q' {
                return false;
            }
        }
        
        let (mut i, mut j) = (row, col);
        while j > 0 && i < board.len() - 1 {
            i += 1;
            j -= 1;
            if board[i][j] == 'Q' {
                return false;
            }
        }
        
        true
    }
}