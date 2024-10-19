# Definition for a binary tree node.
# class TreeNode
#     attr_accessor :val, :left, :right
#     def initialize(val = 0, left = nil, right = nil)
#         @val = val
#         @left = left
#         @right = right
#     end
# end
def sorted_array_to_bst(nums)
    return nil if nums.empty?
    build_bst(nums, 0, nums.length - 1)
end

def build_bst(nums, start, end_idx)
    return nil if start > end_idx
    
    mid = start + (end_idx - start) / 2
    node = TreeNode.new(nums[mid])
    node.left = build_bst(nums, start, mid - 1)
    node.right = build_bst(nums, mid + 1, end_idx)
    
    node
end