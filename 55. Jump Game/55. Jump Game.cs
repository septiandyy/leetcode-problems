public class Solution {
    public bool CanJump(int[] nums) {
        int maxReach = 0;
        
        for (int i = 0; i <= maxReach && i < nums.Length; i++) {
            maxReach = Math.Max(maxReach, i + nums[i]);
            if (maxReach >= nums.Length - 1) {
                return true;
            }
        }
        
        return false;
    }
}