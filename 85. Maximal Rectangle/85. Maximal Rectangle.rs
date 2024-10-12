impl Solution {
    pub fn maximal_rectangle(matrix: Vec<Vec<char>>) -> i32 {
        if matrix.is_empty() || matrix[0].is_empty() {
            return 0;
        }
        let (rows, cols) = (matrix.len(), matrix[0].len());
        let mut heights = vec![0; cols];
        let mut max_area = 0;

        for i in 0..rows {
            for j in 0..cols {
                if matrix[i][j] == '1' {
                    heights[j] += 1;
                } else {
                    heights[j] = 0;
                }
            }
            max_area = max_area.max(Self::largest_rectangle_area(&heights));
        }

        max_area
    }

    fn largest_rectangle_area(heights: &[i32]) -> i32 {
        let mut stack = Vec::new();
        let mut max_area = 0;
        let mut heights = heights.to_vec();
        heights.push(0);

        for (i, &h) in heights.iter().enumerate() {
            while !stack.is_empty() && h < heights[*stack.last().unwrap()] {
                let height = heights[stack.pop().unwrap()];
                let width = if stack.is_empty() {
                    i as i32
                } else {
                    (i - stack.last().unwrap() - 1) as i32
                };
                max_area = max_area.max(height * width);
            }
            stack.push(i);
        }

        max_area
    }
}