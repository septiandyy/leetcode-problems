impl Solution {
    pub fn solve_sudoku(board: &mut Vec<Vec<char>>) {
        Self::solve(board);
    }
    
    fn is_valid(board: &Vec<Vec<char>>, row: usize, col: usize, num: char) -> bool {
        for x in 0..9 {
            if board[row][x] == num { return false; }
            if board[x][col] == num { return false; }
            if board[3 * (row / 3) + x / 3][3 * (col / 3) + x % 3] == num { return false; }
        }
        true
    }
    
    fn solve(board: &mut Vec<Vec<char>>) -> bool {
        for row in 0..9 {
            for col in 0..9 {
                if board[row][col] == '.' {
                    for num in '1'..='9' {
                        if Self::is_valid(board, row, col, num) {
                            board[row][col] = num;
                            if Self::solve(board) { return true; }
                            board[row][col] = '.';
                        }
                    }
                    return false;
                }
            }
        }
        true
    }
}