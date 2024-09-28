class Solution {
  List<List<int>> fourSum(List<int> nums, int target) {
    nums.sort();
    List<List<int>> result = [];
    
    for (int a = 0; a < nums.length - 3; a++) {
      if (a > 0 && nums[a] == nums[a-1]) continue;
      for (int b = a + 1; b < nums.length - 2; b++) {
        if (b > a + 1 && nums[b] == nums[b-1]) continue;
        int c = b + 1;
        int d = nums.length - 1;
        while (c < d) {
          int sum = nums[a] + nums[b] + nums[c] + nums[d];
          if (sum == target) {
            result.add([nums[a], nums[b], nums[c], nums[d]]);
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