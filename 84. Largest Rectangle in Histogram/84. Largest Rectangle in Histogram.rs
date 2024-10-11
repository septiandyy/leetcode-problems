impl Solution {
    pub fn largest_rectangle_area(heights: Vec<i32>) -> i32 {
        let mut stack: Vec<usize> = Vec::new();
        let mut max_area = 0;
        let mut heights = heights;
        heights.push(0);

        for i in 0..heights.len() {
            while !stack.is_empty() && heights[i] < heights[*stack.last().unwrap()] {
                let height = heights[stack.pop().unwrap()];
                let width = if stack.is_empty() { i } else { i - stack.last().unwrap() - 1 };
                max_area = max_area.max(height * width as i32);
            }
            stack.push(i);
        }

        max_area
    }
}