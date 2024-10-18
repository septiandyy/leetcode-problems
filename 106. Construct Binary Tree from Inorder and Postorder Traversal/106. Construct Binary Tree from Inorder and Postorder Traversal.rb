# Definition for a binary tree node.
# class TreeNode
#     attr_accessor :val, :left, :right
#     def initialize(val = 0, left = nil, right = nil)
#         @val = val
#         @left = left
#         @right = right
#     end
# end
def build_tree_helper(inorder, in_start, in_end, postorder, post_start, post_end, in_map)
    return nil if in_start > in_end
    
    root = TreeNode.new(postorder[post_end])
    root_index = in_map[root.val]
    left_subtree_size = root_index - in_start
    
    root.left = build_tree_helper(inorder, in_start, root_index - 1,
                                 postorder, post_start, post_start + left_subtree_size - 1,
                                 in_map)
    root.right = build_tree_helper(inorder, root_index + 1, in_end,
                                  postorder, post_start + left_subtree_size, post_end - 1,
                                  in_map)
    
    root
end

def build_tree(inorder, postorder)
    in_map = {}
    inorder.each_with_index { |val, idx| in_map[val] = idx }
    
    build_tree_helper(inorder, 0, inorder.length - 1,
                     postorder, 0, postorder.length - 1,
                     in_map)
end