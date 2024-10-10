impl Solution {
    pub fn remove_duplicates(nums: &mut Vec<i32>) -> i32 {
        if nums.len() <= 2 {
            return nums.len() as i32;
        }
        
        let mut k = 2;  // Start from the third element
        
        for i in 2..nums.len() {
            if nums[i] != nums[k-2] {
                nums[k] = nums[i];
                k += 1;
            }
        }
        
        k as i32
    }
}