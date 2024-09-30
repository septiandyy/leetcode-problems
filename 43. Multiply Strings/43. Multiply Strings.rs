impl Solution {
    pub fn multiply(num1: String, num2: String) -> String {
        let n1 = num1.len();
        let n2 = num2.len();
        let mut res = vec![0; n1 + n2];
        
        for (i, c1) in num1.chars().rev().enumerate() {
            for (j, c2) in num2.chars().rev().enumerate() {
                let mul = (c1 as u8 - b'0') * (c2 as u8 - b'0');
                let sum = res[i + j] + mul as i32;
                
                res[i + j] = sum % 10;
                res[i + j + 1] += sum / 10;
            }
        }
        
        while res.len() > 1 && res.last() == Some(&0) {
            res.pop();
        }
        
        res.into_iter().rev().map(|d| (d as u8 + b'0') as char).collect()
    }
}