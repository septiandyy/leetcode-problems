impl Solution {
    pub fn gray_code(n: i32) -> Vec<i32> {
        let size = 1 << n;  // 2^n
        let mut result = vec![0; size as usize];
        
        for i in 0..size {
            result[i as usize] = i ^ (i >> 1);
        }
        
        result
    }
}