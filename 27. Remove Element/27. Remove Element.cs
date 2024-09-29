public class Solution {
    public int RemoveElement(int[] nums, int val) {
        int k = 0; // Counter for elements not equal to val
        for (int i = 0; i < nums.Length; i++) {
            if (nums[i] != val) {
                nums[k++] = nums[i]; // Place the element at the next position
            }
        }
        return k; // Return the count of elements not equal to val
    }
}