impl Solution {
    pub fn my_sqrt(x: i32) -> i32 {
        if x == 0 || x == 1 {
            return x;
        }
        
        let mut left: i64 = 1;
        let mut right: i64 = x as i64;
        while left <= right {
            let mid = left + (right - left) / 2;
            if mid * mid == x as i64 {
                return mid as i32;
            }
            if mid * mid < x as i64 {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        right as i32
    }
}