public class Solution {
    public IList<IList<int>> SubsetsWithDup(int[] nums) {
        Array.Sort(nums);
        var result = new List<IList<int>>();
        Backtrack(nums, 0, new List<int>(), result);
        return result;
    }
    
    private void Backtrack(int[] nums, int start, List<int> current, List<IList<int>> result) {
        result.Add(new List<int>(current));
        
        for (int i = start; i < nums.Length; i++) {
            if (i > start && nums[i] == nums[i-1]) continue;
            current.Add(nums[i]);
            Backtrack(nums, i + 1, current, result);
            current.RemoveAt(current.Count - 1);
        }
    }
}