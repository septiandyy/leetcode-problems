impl Solution {
    pub fn my_atoi(s: String) -> i32 {
        let mut chars = s.chars().peekable();
        
        // Step 1: Ignore leading whitespace
        while let Some(&ch) = chars.peek() {
            if ch != ' ' { break; }
            chars.next();
        }
        
        // Step 2: Check for sign
        let mut sign = 1;
        if let Some(&ch) = chars.peek() {
            if ch == '-' {
                sign = -1;
                chars.next();
            } else if ch == '+' {
                chars.next();
            }
        }
        
        // Step 3: Convert digits
        let mut result = 0i32;
        while let Some(ch) = chars.next() {
            if !ch.is_ascii_digit() { break; }
            let digit = ch as i32 - '0' as i32;
            // Check for overflow
            if result > i32::MAX / 10 || (result == i32::MAX / 10 && digit > i32::MAX % 10) {
                return if sign == 1 { i32::MAX } else { i32::MIN };
            }
            result = result * 10 + digit;
        }
        
        sign * result
    }
}