use std::collections::HashSet;

impl Solution {
    pub fn permute_unique(nums: Vec<i32>) -> Vec<Vec<i32>> {
        let mut result = Vec::new();
        let mut nums = nums;
        nums.sort_unstable();
        Self::backtrack(&mut nums, 0, &mut result);
        result
    }
    
    fn backtrack(nums: &mut Vec<i32>, start: usize, result: &mut Vec<Vec<i32>>) {
        if start == nums.len() {
            result.push(nums.clone());
            return;
        }
        
        let mut used = HashSet::new();
        for i in start..nums.len() {
            if used.contains(&nums[i]) || (i > start && nums[i] == nums[start]) {
                continue;
            }
            used.insert(nums[i]);
            nums.swap(start, i);
            Self::backtrack(nums, start + 1, result);
            nums.swap(start, i);
        }
    }
}