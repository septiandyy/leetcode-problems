impl Solution {
    pub fn max_sub_array(nums: Vec<i32>) -> i32 {
        let mut max_sum = nums[0];
        let mut current_sum = nums[0];
        
        for &num in nums.iter().skip(1) {
            current_sum = num.max(current_sum + num);
            max_sum = max_sum.max(current_sum);
        }
        
        max_sum
    }
    
    // Divide and Conquer approach
    pub fn max_sub_array_divide_conquer(nums: Vec<i32>) -> i32 {
        fn max_sub_array_recursive(nums: &[i32], low: usize, high: usize) -> i32 {
            if low == high {
                return nums[low];
            }
            
            let mid = (low + high) / 2;
            let left_sum = max_sub_array_recursive(nums, low, mid);
            let right_sum = max_sub_array_recursive(nums, mid + 1, high);
            let cross_sum = max_crossing_sum(nums, low, mid, high);
            
            left_sum.max(right_sum).max(cross_sum)
        }
        
        fn max_crossing_sum(nums: &[i32], low: usize, mid: usize, high: usize) -> i32 {
            let mut sum = 0;
            let mut left_sum = i32::MIN;
            for i in (low..=mid).rev() {
                sum += nums[i];
                left_sum = left_sum.max(sum);
            }
            
            sum = 0;
            let mut right_sum = i32::MIN;
            for i in mid+1..=high {
                sum += nums[i];
                right_sum = right_sum.max(sum);
            }
            
            left_sum.max(right_sum).max(left_sum + right_sum)
        }
        
        max_sub_array_recursive(&nums, 0, nums.len() - 1)
    }
}