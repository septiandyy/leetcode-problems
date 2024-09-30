impl Solution {
    pub fn combination_sum(candidates: Vec<i32>, target: i32) -> Vec<Vec<i32>> {
        let mut candidates = candidates;
        candidates.sort_unstable();
        let mut result = Vec::new();
        Self::backtrack(&candidates, target, 0, &mut Vec::new(), &mut result);
        result
    }
    
    fn backtrack(candidates: &[i32], target: i32, index: usize, current: &mut Vec<i32>, result: &mut Vec<Vec<i32>>) {
        if target == 0 {
            result.push(current.clone());
            return;
        }
        
        for i in index..candidates.len() {
            if candidates[i] > target {
                break;
            }
            current.push(candidates[i]);
            Self::backtrack(candidates, target - candidates[i], i, current, result);
            current.pop();
        }
    }
}