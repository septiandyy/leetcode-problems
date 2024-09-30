impl Solution {
    pub fn first_missing_positive(mut nums: Vec<i32>) -> i32 {
        let mut minimal_null = nums.len();
        for i in (0..nums.len()).rev() {
            if nums[i] <= 0 || nums[i] > nums.len() as i32 {
                nums[i] = 0;
                minimal_null = minimal_null.min(i);
            } else {
                let mut current = i;
                let mut temp = nums[current];
                nums[current] = 0;
                while temp > 0 && temp <= nums.len() as i32 && temp as usize != current + 1 {
                    current = (temp - 1) as usize;
                    let t2 = nums[current];
                    nums[current] = temp;
                    temp = t2;
                }
                if current != i {
                    minimal_null = minimal_null.min(i);
                }
            }
        }
        (minimal_null + 1) as i32
    }
}