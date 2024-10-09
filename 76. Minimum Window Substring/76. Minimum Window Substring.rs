impl Solution {
    pub fn min_window(s: String, t: String) -> String {
        let mut need = [0; 128];
        let mut have = [0; 128];
        let mut need_count = 0;
        let mut have_count = 0;
        let mut left = 0;
        let mut start = 0;
        let mut min_len = s.len() + 1;

        for c in t.bytes() {
            if need[c as usize] == 0 {
                need_count += 1;
            }
            need[c as usize] += 1;
        }

        for (right, c) in s.bytes().enumerate() {
            have[c as usize] += 1;
            if have[c as usize] == need[c as usize] {
                have_count += 1;
            }

            while have_count == need_count {
                if right - left + 1 < min_len {
                    start = left;
                    min_len = right - left + 1;
                }
                let left_char = s.as_bytes()[left] as usize;
                have[left_char] -= 1;
                if have[left_char] < need[left_char] {
                    have_count -= 1;
                }
                left += 1;
            }
        }

        if min_len > s.len() {
            String::new()
        } else {
            s[start..start + min_len].to_string()
        }
    }
}