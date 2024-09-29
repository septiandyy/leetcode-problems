impl Solution {
    pub fn longest_valid_parentheses(s: String) -> i32 {
        let mut max_len = 0;
        let mut stack = vec![-1];

        for (i, ch) in s.chars().enumerate() {
            let i = i as i32;
            if ch == '(' {
                stack.push(i);
            } else {
                stack.pop();
                if stack.is_empty() {
                    stack.push(i);
                } else {
                    max_len = max_len.max(i - stack.last().unwrap());
                }
            }
        }

        max_len
    }
}