public class Solution {
    public string GetPermutation(int n, int k) {
        var factorial = new int[10];
        var nums = new List<int>();
        factorial[0] = 1;
        
        for (int i = 1; i <= n; i++) {
            factorial[i] = factorial[i-1] * i;
            nums.Add(i);
        }
        
        k--;  // Convert to 0-based index
        var result = new StringBuilder();
        
        for (int i = 0; i < n; i++) {
            int index = k / factorial[n-1-i];
            result.Append(nums[index]);
            nums.RemoveAt(index);
            k %= factorial[n-1-i];
        }
        
        return result.ToString();
    }
}