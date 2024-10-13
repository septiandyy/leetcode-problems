impl Solution {
    pub fn subsets_with_dup(mut nums: Vec<i32>) -> Vec<Vec<i32>> {
        nums.sort_unstable();
        let mut result = Vec::new();
        Self::backtrack(&nums, 0, &mut Vec::new(), &mut result);
        result
    }
    
    fn backtrack(nums: &Vec<i32>, start: usize, current: &mut Vec<i32>, result: &mut Vec<Vec<i32>>) {
        result.push(current.clone());
        
        for i in start..nums.len() {
            if i > start && nums[i] == nums[i-1] {
                continue;
            }
            current.push(nums[i]);
            Self::backtrack(nums, i + 1, current, result);
            current.pop();
        }
    }
}