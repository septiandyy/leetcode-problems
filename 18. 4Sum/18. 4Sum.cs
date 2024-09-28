public class Solution {
    public IList<IList<int>> FourSum(int[] nums, int target) {
        Array.Sort(nums);
        var result = new List<IList<int>>();
        
        for (int a = 0; a < nums.Length - 3; a++) {
            if (a > 0 && nums[a] == nums[a-1]) continue;
            for (int b = a + 1; b < nums.Length - 2; b++) {
                if (b > a + 1 && nums[b] == nums[b-1]) continue;
                int c = b + 1;
                int d = nums.Length - 1;
                while (c < d) {
                    long sum = (long)nums[a] + nums[b] + nums[c] + nums[d];
                    if (sum == target) {
                        result.Add(new List<int> { nums[a], nums[b], nums[c], nums[d] });
                        while (c < d && nums[c] == nums[c+1]) c++;
                        while (c < d && nums[d] == nums[d-1]) d--;
                        c++; d--;
                    } else if (sum < target) {
                        c++;
                    } else {
                        d--;
                    }
                }
            }
        }
        
        return result;
    }
}