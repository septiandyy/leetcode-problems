import java.util.Arrays;

class Solution {
    public int removeElement(int[] nums, int val) {
        int k = 0; // k will be the index where we place non-val elements
        
        for (int i = 0; i < nums.length; i++) {
            if (nums[i] != val) {
                nums[k] = nums[i];
                k++;
            }
        }
        
        return k;
    }

    public static void main(String[] args) {
        Solution solution = new Solution();

        // Test case 1
        int[] nums1 = {3, 2, 2, 3};
        int val1 = 3;
        int result1 = solution.removeElement(nums1, val1);
        System.out.println("Test case 1 result: " + result1);
        System.out.println("Modified array: " + Arrays.toString(Arrays.copyOf(nums1, result1)));

        // Test case 2
        int[] nums2 = {0, 1, 2, 2, 3, 0, 4, 2};
        int val2 = 2;
        int result2 = solution.removeElement(nums2, val2);
        System.out.println("Test case 2 result: " + result2);
        System.out.println("Modified array: " + Arrays.toString(Arrays.copyOf(nums2, result2)));
    }
}