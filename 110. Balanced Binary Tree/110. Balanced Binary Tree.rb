# Definition for a binary tree node.
# class TreeNode
#     attr_accessor :val, :left, :right
#     def initialize(val = 0, left = nil, right = nil)
#         @val = val
#         @left = left
#         @right = right
#     end
# end
def check_balance(root)
    return [true, 0] if root.nil?
    
    left_balanced, left_height = check_balance(root.left)
    right_balanced, right_height = check_balance(root.right)
    
    balanced = left_balanced && right_balanced &&
              (left_height - right_height).abs <= 1
    [balanced, 1 + [left_height, right_height].max]
end

def is_balanced(root)
    check_balance(root)[0]
end