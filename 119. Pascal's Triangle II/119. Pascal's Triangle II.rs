impl Solution {
    pub fn get_row(row_index: i32) -> Vec<i32> {
        let row_index = row_index as usize;
        let mut row = vec![1; row_index + 1];
        
        for i in 1..=row_index {
            let mut prev = row[0];
            for j in 1..i {
                let temp = row[j];
                row[j] = ((prev as i64 * (row_index - j + 1) as i64) / j as i64) as i32;
                prev = temp;
            }
            row[i] = 1;
        }
        
        row
    }
}