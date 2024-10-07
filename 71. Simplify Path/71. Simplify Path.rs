impl Solution {
    pub fn simplify_path(path: String) -> String {
        let mut stack: Vec<String> = Vec::new();
        
        for part in path.split('/') {
            match part {
                "." | "" => continue,
                ".." => { stack.pop(); },
                _ => stack.push(part.to_string()),
            }
        }
        
        if stack.is_empty() {
            return "/".to_string();
        }
        
        stack.iter().fold(String::new(), |mut acc, x| {
            acc.push('/');
            acc.push_str(x);
            acc
        })
    }
}