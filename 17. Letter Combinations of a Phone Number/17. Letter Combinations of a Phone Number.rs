impl Solution {
    pub fn letter_combinations(digits: String) -> Vec<String> {
        if digits.is_empty() {
            return vec![];
        }
        
        let letter_map = vec!["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
        let mut result = Vec::new();
        
        fn backtrack(digits: &str, index: usize, current: &mut String, result: &mut Vec<String>, letter_map: &Vec<&str>) {
            if index == digits.len() {
                result.push(current.clone());
                return;
            }
            
            let letters = letter_map[digits.as_bytes()[index] as usize - b'0' as usize];
            for c in letters.chars() {
                current.push(c);
                backtrack(digits, index + 1, current, result, letter_map);
                current.pop();
            }
        }
        
        backtrack(&digits, 0, &mut String::new(), &mut result, &letter_map);
        result
    }
}