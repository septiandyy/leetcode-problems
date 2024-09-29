public class Solution {
    public int[] SearchRange(int[] nums, int target) {
        int left = FindBound(nums, target, true);
        if (left == -1) return new int[] {-1, -1};
        int right = FindBound(nums, target, false);
        return new int[] {left, right};
    }
    
    private int FindBound(int[] nums, int target, bool isLeft) {
        int left = 0, right = nums.Length - 1;
        int result = -1;
        
        while (left <= right) {
            int mid = left + (right - left) / 2;
            if (nums[mid] == target) {
                result = mid;
                if (isLeft) right = mid - 1;
                else left = mid + 1;
            } else if (nums[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
        
        return result;
    }
}