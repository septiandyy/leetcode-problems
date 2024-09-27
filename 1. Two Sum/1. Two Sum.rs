use std::collections::HashMap;

// The Solution struct is already defined in the environment, so we don't need to define it again.
// struct Solution;

impl Solution {
    pub fn two_sum(nums: Vec<i32>, target: i32) -> Vec<i32> {
        let mut num_map: HashMap<i32, i32> = HashMap::new();
        
        for (i, &num) in nums.iter().enumerate() {
            let complement = target - num;
            if let Some(&j) = num_map.get(&complement) {
                return vec![j, i as i32];
            }
            num_map.insert(num, i as i32);
        }
        
        vec![] // Return empty vector if no solution found (should not happen given the problem constraints)
    }
}

// No main function is needed as it's provided by the testing environment