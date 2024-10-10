public class Solution {
    public int RemoveDuplicates(int[] nums) {
        if (nums.Length <= 2) return nums.Length;
        
        int k = 2;  // Start from the third element
        
        for (int i = 2; i < nums.Length; i++) {
            if (nums[i] != nums[k-2]) {
                nums[k] = nums[i];
                k++;
            }
        }
        
        return k;
    }
}