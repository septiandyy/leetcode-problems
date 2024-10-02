impl Solution {
    pub fn total_n_queens(n: i32) -> i32 {
        let mut board = vec![0; n as usize];
        Self::solve_n_queens(&mut board, 0, n as usize) as i32
    }
    
    fn solve_n_queens(board: &mut Vec<i32>, row: usize, n: usize) -> usize {
        if row == n {
            return 1;
        }
        
        let mut count = 0;
        for col in 0..n {
            if Self::is_safe(board, row, col) {
                board[row] = col as i32;
                count += Self::solve_n_queens(board, row + 1, n);
            }
        }
        
        count
    }
    
    fn is_safe(board: &Vec<i32>, row: usize, col: usize) -> bool {
        for i in 0..row {
            if board[i] == col as i32 || 
               (board[i] - i as i32) == (col as i32 - row as i32) || 
               (board[i] + i as i32) == (col as i32 + row as i32) {
                return false;
            }
        }
        true
    }
}