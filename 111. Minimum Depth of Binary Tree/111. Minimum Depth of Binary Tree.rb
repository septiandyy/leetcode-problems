# Definition for a binary tree node.
# class TreeNode
#     attr_accessor :val, :left, :right
#     def initialize(val = 0, left = nil, right = nil)
#         @val = val
#         @left = left
#         @right = right
#     end
# end
def min_depth(root)
    return 0 if root.nil?
    return 1 if root.left.nil? && root.right.nil?
    
    left_depth = root.left ? min_depth(root.left) : Float::INFINITY
    right_depth = root.right ? min_depth(root.right) : Float::INFINITY
    
    1 + [left_depth, right_depth].min
end