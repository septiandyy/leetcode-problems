impl Solution {
    pub fn count_and_say(n: i32) -> String {
        if n == 1 {
            return "1".to_string();
        }
        
        let prev = Self::count_and_say(n - 1);
        let mut result = String::new();
        let mut count = 1;
        
        for i in 1..=prev.len() {
            if i < prev.len() && prev.chars().nth(i) == prev.chars().nth(i-1) {
                count += 1;
            } else {
                result.push_str(&count.to_string());
                result.push(prev.chars().nth(i-1).unwrap());
                count = 1;
            }
        }
        
        result
    }
}