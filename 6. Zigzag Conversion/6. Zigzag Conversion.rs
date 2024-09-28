impl Solution {
    pub fn convert(s: String, num_rows: i32) -> String {
        let num_rows = num_rows as usize;
        if num_rows == 1 || num_rows >= s.len() {
            return s;
        }

        let mut rows: Vec<String> = vec![String::new(); num_rows];
        let mut current_row = 0;
        let mut step = 1;

        for c in s.chars() {
            rows[current_row].push(c);
            
            if current_row == 0 {
                step = 1;
            } else if current_row == num_rows - 1 {
                step = -1;
            }
            
            current_row = (current_row as i32 + step) as usize;
        }

        rows.concat()
    }
}