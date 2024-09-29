impl Solution {
    pub fn str_str(haystack: String, needle: String) -> i32 {
        if needle.is_empty() {
            return 0;
        }
        
        let haystack_chars: Vec<char> = haystack.chars().collect();
        let needle_chars: Vec<char> = needle.chars().collect();
        
        for i in 0..=haystack_chars.len().saturating_sub(needle_chars.len()) {
            if haystack_chars[i..].starts_with(&needle_chars) {
                return i as i32;
            }
        }
        
        -1
    }
}