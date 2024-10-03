impl Solution {
    pub fn merge(mut intervals: Vec<Vec<i32>>) -> Vec<Vec<i32>> {
        if intervals.len() <= 1 {
            return intervals;
        }
        
        intervals.sort_by_key(|a| a[0]);
        let mut merged: Vec<Vec<i32>> = Vec::new();
        
        for interval in intervals {
            if let Some(last) = merged.last_mut() {
                if last[1] >= interval[0] {
                    last[1] = last[1].max(interval[1]);
                } else {
                    merged.push(interval);
                }
            } else {
                merged.push(interval);
            }
        }
        
        merged
    }
}