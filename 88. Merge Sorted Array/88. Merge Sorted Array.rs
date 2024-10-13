impl Solution {
    pub fn merge(nums1: &mut Vec<i32>, m: i32, nums2: &mut Vec<i32>, n: i32) {
        let (mut m, mut n) = (m as usize, n as usize);
        let mut write_index = m + n - 1;

        while n > 0 {
            if m > 0 && nums1[m - 1] > nums2[n - 1] {
                nums1[write_index] = nums1[m - 1];
                m -= 1;
            } else {
                nums1[write_index] = nums2[n - 1];
                n -= 1;
            }
            write_index -= 1;
        }
    }
}
