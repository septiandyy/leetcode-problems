# Definition for a binary tree node.
# class TreeNode
#     attr_accessor :val, :left, :right
#     def initialize(val = 0, left = nil, right = nil)
#         @val = val
#         @left = left
#         @right = right
#     end
# end
def build_tree_helper(preorder, pre_start, pre_end, inorder, in_start, in_end, in_map)
    return nil if pre_start > pre_end
    
    root = TreeNode.new(preorder[pre_start])
    root_index = in_map[root.val]
    left_subtree_size = root_index - in_start
    
    root.left = build_tree_helper(preorder, pre_start + 1, pre_start + left_subtree_size,
                                 inorder, in_start, root_index - 1, in_map)
    root.right = build_tree_helper(preorder, pre_start + left_subtree_size + 1, pre_end,
                                  inorder, root_index + 1, in_end, in_map)
    
    root
end

def build_tree(preorder, inorder)
    in_map = {}
    inorder.each_with_index { |val, idx| in_map[val] = idx }
    
    build_tree_helper(preorder, 0, preorder.length - 1,
                     inorder, 0, inorder.length - 1, in_map)
end