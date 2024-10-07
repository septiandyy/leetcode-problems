impl Solution {
    pub fn is_number(s: String) -> bool {
        let mut chars = s.chars().peekable();
        let mut seen_digit = false;
        let mut seen_dot = false;
        let mut seen_e = false;
        
        // Handle sign
        if let Some(&('+' | '-')) = chars.peek() {
            chars.next();
        }
        
        while let Some(c) = chars.next() {
            match c {
                '0'..='9' => seen_digit = true,
                '.' => {
                    if seen_dot || seen_e { return false; }
                    seen_dot = true;
                },
                'e' | 'E' => {
                    if seen_e || !seen_digit { return false; }
                    seen_e = true;
                    seen_digit = false;
                    if let Some(&('+' | '-')) = chars.peek() {
                        chars.next();
                    }
                },
                _ => return false,
            }
        }
        
        seen_digit
    }
}