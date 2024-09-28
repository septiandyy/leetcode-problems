impl Solution {
    pub fn max_area(height: Vec<i32>) -> i32 {
        let mut left = 0;
        let mut right = height.len() - 1;
        let mut max_water = 0;

        while left < right {
            let width = (right - left) as i32;
            let container_height = height[left].min(height[right]);
            let water = width * container_height;
            
            max_water = max_water.max(water);

            if height[left] < height[right] {
                left += 1;
            } else {
                right -= 1;
            }
        }

        max_water
    }
}

// Example usage and tests
#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_example_1() {
        assert_eq!(Solution::max_area(vec![1,8,6,2,5,4,8,3,7]), 49);
    }

    #[test]
    fn test_example_2() {
        assert_eq!(Solution::max_area(vec![1,1]), 1);
    }

    #[test]
    fn test_additional() {
        assert_eq!(Solution::max_area(vec![4,3,2,1,4]), 16);
    }
}