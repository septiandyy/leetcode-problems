impl Solution {
    pub fn length_of_last_word(s: String) -> i32 {
        let trimmed = s.trim(); // Remove leading and trailing spaces
        let words: Vec<&str> = trimmed.split_whitespace().collect(); // Split into words

        // Get the last word and return its length
        if let Some(last_word) = words.last() {
            last_word.len() as i32
        } else {
            0 // This case should not happen due to the problem constraints
        }
    }
}