class Solution {
    public int jump(int[] nums) {
        int n = nums.length;
        int jumps = 0, farthest = 0, currentEnd = 0;

        for (int i = 0; i < n - 1; i++) {
            farthest = Math.max(farthest, i + nums[i]);

            if (i == currentEnd) {
                jumps++;
                currentEnd = farthest;
            }

            if (currentEnd >= n - 1) {
                break;
            }
        }

        return jumps;
    }

    public static void main(String[] args) {
        Solution solution = new Solution();
        int[] nums1 = {2, 3, 1, 1, 4};
        System.out.println("Minimum jumps: " + solution.jump(nums1)); // Output: 2

        int[] nums2 = {2, 3, 0, 1, 4};
        System.out.println("Minimum jumps: " + solution.jump(nums2)); // Output: 2
    }
}