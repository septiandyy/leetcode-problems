impl Solution {
    pub fn search(nums: Vec<i32>, target: i32) -> i32 {
        let mut left = 0;
        let mut right = nums.len() as i32 - 1;
        
        while left <= right {
            let mid = left + (right - left) / 2;
            
            if nums[mid as usize] == target {
                return mid;
            }
            
            // Check if the left half is sorted
            if nums[left as usize] <= nums[mid as usize] {
                if target >= nums[left as usize] && target < nums[mid as usize] {
                    right = mid - 1;
                } else {
                    left = mid + 1;
                }
            } 
            // Right half is sorted
            else {
                if target > nums[mid as usize] && target <= nums[right as usize] {
                    left = mid + 1;
                } else {
                    right = mid - 1;
                }
            }
        }
        
        -1
    }
}