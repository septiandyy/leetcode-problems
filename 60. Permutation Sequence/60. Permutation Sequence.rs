impl Solution {
    pub fn get_permutation(n: i32, mut k: i32) -> String {
        let mut factorial = vec![1; 10];
        let mut nums: Vec<i32> = (1..=n).collect();
        let mut result = String::new();
        
        for i in 1..=n as usize {
            factorial[i] = factorial[i-1] * i as i32;
        }
        
        k -= 1;  // Convert to 0-based index
        
        for i in 0..n as usize {
            let index = (k / factorial[n as usize - 1 - i]) as usize;
            result.push_str(&nums[index].to_string());
            nums.remove(index);
            k %= factorial[n as usize - 1 - i];
        }
        
        result
    }
}