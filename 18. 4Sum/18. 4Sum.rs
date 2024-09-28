impl Solution {
    pub fn four_sum(nums: Vec<i32>, target: i32) -> Vec<Vec<i32>> {
        let mut nums = nums;
        nums.sort_unstable();
        let mut result = Vec::new();
        let n = nums.len();
        
        for a in 0..n.saturating_sub(3) {
            if a > 0 && nums[a] == nums[a-1] {
                continue;
            }
            for b in a+1..n.saturating_sub(2) {
                if b > a + 1 && nums[b] == nums[b-1] {
                    continue;
                }
                let mut c = b + 1;
                let mut d = n - 1;
                while c < d {
                    let sum = nums[a] as i64 + nums[b] as i64 + nums[c] as i64 + nums[d] as i64;
                    if sum == target as i64 {
                        result.push(vec![nums[a], nums[b], nums[c], nums[d]]);
                        while c < d && nums[c] == nums[c+1] {
                            c += 1;
                        }
                        while c < d && nums[d] == nums[d-1] {
                            d -= 1;
                        }
                        c += 1;
                        d -= 1;
                    } else if sum < target as i64 {
                        c += 1;
                    } else {
                        d -= 1;
                    }
                }
            }
        }
        
        result
    }
}