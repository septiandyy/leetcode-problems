use std::collections::HashSet;

impl Solution {
    pub fn length_of_longest_substring(s: String) -> i32 {
        let chars: Vec<char> = s.chars().collect();
        let mut char_set = HashSet::new();
        let mut max_length = 0;
        let mut left = 0;
        let mut right = 0;

        while right < chars.len() {
            if !char_set.contains(&chars[right]) {
                char_set.insert(chars[right]);
                max_length = max_length.max(right - left + 1);
                right += 1;
            } else {
                char_set.remove(&chars[left]);
                left += 1;
            }
        }

        max_length as i32
    }
}