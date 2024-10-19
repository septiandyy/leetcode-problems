/**
 * Definition for a binary tree node.
 * class TreeNode {
 *   int val;
 *   TreeNode? left;
 *   TreeNode? right;
 *   TreeNode([this.val = 0, this.left, this.right]);
 * }
 */
class Solution {
    TreeNode? sortedArrayToBST(List<int> nums) {
        return buildBST(nums, 0, nums.length - 1);
    }
    
    TreeNode? buildBST(List<int> nums, int start, int end) {
        if (start > end) return null;
        
        int mid = start + (end - start) ~/ 2;
        TreeNode node = TreeNode(nums[mid]);
        node.left = buildBST(nums, start, mid - 1);
        node.right = buildBST(nums, mid + 1, end);
        
        return node;
    }
}
