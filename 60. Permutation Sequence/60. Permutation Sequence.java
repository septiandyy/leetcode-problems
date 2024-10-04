class Solution {
    public String getPermutation(int n, int k) {
        int[] factorial = new int[10];
        List<Integer> nums = new ArrayList<>();
        factorial[0] = 1;
        StringBuilder result = new StringBuilder();
        
        for (int i = 1; i <= n; i++) {
            factorial[i] = factorial[i-1] * i;
            nums.add(i);
        }
        
        k--;  // Convert to 0-based index
        
        for (int i = 0; i < n; i++) {
            int index = k / factorial[n-1-i];
            result.append(nums.get(index));
            nums.remove(index);
            k %= factorial[n-1-i];
        }
        
        return result.toString();
    }
}