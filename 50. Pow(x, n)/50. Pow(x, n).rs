impl Solution {
    pub fn my_pow(x: f64, n: i32) -> f64 {
        if n == 0 {
            return 1.0;
        }
        if n == i32::MIN {
            let x = 1.0 / x;
            let n = -(n + 1);
            return x * Self::my_pow(x, n);
        }
        let (mut x, mut n) = if n < 0 {
            (1.0 / x, -n)
        } else {
            (x, n)
        };
        let mut result = 1.0;
        while n > 0 {
            if n & 1 == 1 {
                result *= x;
            }
            x *= x;
            n >>= 1;
        }
        result
    }
}