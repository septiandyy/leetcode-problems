impl Solution {
    pub fn search_range(nums: Vec<i32>, target: i32) -> Vec<i32> {
        let left = Self::find_bound(&nums, target, true);
        if left == -1 {
            return vec![-1, -1];
        }
        let right = Self::find_bound(&nums, target, false);
        vec![left, right]
    }
    
    fn find_bound(nums: &Vec<i32>, target: i32, is_left: bool) -> i32 {
        let mut left = 0;
        let mut right = nums.len() as i32 - 1;
        let mut result = -1;
        
        while left <= right {
            let mid = left + (right - left) / 2;
            if nums[mid as usize] == target {
                result = mid;
                if is_left {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            } else if nums[mid as usize] < target {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        
        result
    }
}