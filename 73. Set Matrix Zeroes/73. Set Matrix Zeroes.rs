impl Solution {
    pub fn set_zeroes(matrix: &mut Vec<Vec<i32>>) {
        let (m, n) = (matrix.len(), matrix[0].len());
        let mut first_row = false;
        let mut first_col = false;
        
        // Check if first row should be set to zero
        for j in 0..n {
            if matrix[0][j] == 0 {
                first_row = true;
                break;
            }
        }
        
        // Check if first column should be set to zero
        for i in 0..m {
            if matrix[i][0] == 0 {
                first_col = true;
                break;
            }
        }
        
        // Use first row and column as markers
        for i in 1..m {
            for j in 1..n {
                if matrix[i][j] == 0 {
                    matrix[i][0] = 0;
                    matrix[0][j] = 0;
                }
            }
        }
        
        // Set zeros based on markers
        for i in 1..m {
            for j in 1..n {
                if matrix[i][0] == 0 || matrix[0][j] == 0 {
                    matrix[i][j] = 0;
                }
            }
        }
        
        // Set first row to zero if needed
        if first_row {
            for j in 0..n {
                matrix[0][j] = 0;
            }
        }
        
        // Set first column to zero if needed
        if first_col {
            for i in 0..m {
                matrix[i][0] = 0;
            }
        }
    }
}