impl Solution {
    pub fn search_matrix(matrix: Vec<Vec<i32>>, target: i32) -> bool {
        if matrix.is_empty() || matrix[0].is_empty() {
            return false;
        }
        
        let m = matrix.len();
        let n = matrix[0].len();
        let mut left: usize = 0;
        let mut right: usize = m.checked_mul(n).map_or(0, |v| v.saturating_sub(1));
        
        while left <= right {
            let mid = left + (right - left) / 2;
            let mid_value = matrix[mid / n][mid % n];
            
            if mid_value == target {
                return true;
            } else if mid_value < target {
                left = mid.saturating_add(1);
            } else {
                if mid == 0 {
                    break;
                }
                right = mid - 1;
            }
        }
        
        false
    }
}