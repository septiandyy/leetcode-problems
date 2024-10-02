impl Solution {
    pub fn spiral_order(matrix: Vec<Vec<i32>>) -> Vec<i32> {
        if matrix.is_empty() || matrix[0].is_empty() {
            return vec![];
        }
        
        let (m, n) = (matrix.len(), matrix[0].len());
        let mut result = Vec::with_capacity(m * n);
        let (mut left, mut right, mut top, mut bottom) = (0, n - 1, 0, m - 1);
        
        while left <= right && top <= bottom {
            for i in left..=right {
                result.push(matrix[top][i]);
            }
            top += 1;
            
            for i in top..=bottom {
                result.push(matrix[i][right]);
            }
            if right == 0 { break; }
            right -= 1;
            
            if top <= bottom {
                for i in (left..=right).rev() {
                    result.push(matrix[bottom][i]);
                }
                bottom -= 1;
            }
            
            if left <= right {
                for i in (top..=bottom).rev() {
                    result.push(matrix[i][left]);
                }
                left += 1;
            }
        }
        
        result
    }
}