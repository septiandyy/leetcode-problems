impl Solution {
    pub fn add_binary(a: String, b: String) -> String {
        let mut result = String::new();
        let mut carry = 0;
        let mut i = a.len() as i32 - 1;
        let mut j = b.len() as i32 - 1;
        
        while i >= 0 || j >= 0 || carry > 0 {
            let mut sum = carry;
            if i >= 0 {
                sum += a.chars().nth(i as usize).unwrap() as u8 - b'0';
                i -= 1;
            }
            if j >= 0 {
                sum += b.chars().nth(j as usize).unwrap() as u8 - b'0';
                j -= 1;
            }
            result.insert(0, (sum % 2 + b'0') as char);
            carry = sum / 2;
        }
        
        result
    }
}