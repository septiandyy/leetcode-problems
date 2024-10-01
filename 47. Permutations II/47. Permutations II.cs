public class Solution {
    public IList<IList<int>> PermuteUnique(int[] nums) {
        var result = new List<IList<int>>();
        Array.Sort(nums);
        Backtrack(nums, new bool[nums.Length], new List<int>(), result);
        return result;
    }
    
    private void Backtrack(int[] nums, bool[] used, List<int> current, IList<IList<int>> result) {
        if (current.Count == nums.Length) {
            result.Add(new List<int>(current));
            return;
        }
        
        for (int i = 0; i < nums.Length; i++) {
            if (used[i] || (i > 0 && nums[i] == nums[i-1] && !used[i-1])) continue;
            used[i] = true;
            current.Add(nums[i]);
            Backtrack(nums, used, current, result);
            current.RemoveAt(current.Count - 1);
            used[i] = false;
        }
    }
}