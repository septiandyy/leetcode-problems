impl Solution {
    pub fn next_permutation(nums: &mut Vec<i32>) {        
        if let Some(idx) = get_border(nums) {
            let n = nums.len();
            for idx2 in (0..n).rev() {
                if nums[idx2]>nums[idx] { 
                    (nums[idx2],nums[idx]) = (nums[idx],nums[idx2]);
                    break;
                }            
            }
            nums[idx+1..n].reverse();      
        } else {
            nums.reverse();
        }
        fn get_border(nums: &mut Vec<i32>) -> Option<usize> {
            for idx in (0..nums.len()-1).rev() {
                if nums[idx] < nums[idx+1] { return Some(idx) }
            }
            None
        }
    }
}