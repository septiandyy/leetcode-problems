class Solution {
public:
    vector<int> searchRange(vector<int>& nums, int target) {
        int left = findBound(nums, target, true);
        if (left == -1) return {-1, -1};
        int right = findBound(nums, target, false);
        return {left, right};
    }
    
private:
    int findBound(vector<int>& nums, int target, bool isLeft) {
        int left = 0, right = nums.size() - 1;
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
};