impl Solution {
    pub fn longest_palindrome(s: String) -> String {
        let n = s.len();
        if n < 2 {
            return s;
        }

        let s_bytes = s.as_bytes();
        let (mut start, mut max_length) = (0, 1);

        for i in 0..n {
            // Odd length palindromes
            let (mut left, mut right) = (i, i);
            while left < n && right < n && s_bytes[left] == s_bytes[right] {
                if right - left + 1 > max_length {
                    start = left;
                    max_length = right - left + 1;
                }
                if left == 0 || right == n - 1 {
                    break;
                }
                left -= 1;
                right += 1;
            }

            // Even length palindromes
            let (mut left, mut right) = (i, i + 1);
            while left < n && right < n && s_bytes[left] == s_bytes[right] {
                if right - left + 1 > max_length {
                    start = left;
                    max_length = right - left + 1;
                }
                if left == 0 || right == n - 1 {
                    break;
                }
                left -= 1;
                right += 1;
            }
        }

        s[start..start + max_length].to_string()
    }
}