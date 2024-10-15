# Definition for a binary tree node.
# class TreeNode
#     attr_accessor :val, :left, :right
#     def initialize(val = 0, left = nil, right = nil)
#         @val = val
#         @left = left
#         @right = right
#     end
# end

# Recursive solution
def inorder_traversal(root)
    result = []
    inorder_traversal_helper(root, result)
    result
end

def inorder_traversal_helper(node, result)
    return if node.nil?
    
    inorder_traversal_helper(node.left, result)
    result << node.val
    inorder_traversal_helper(node.right, result)
end

# Iterative solution
def inorder_traversal_iterative(root)
    result = []
    stack = []
    current = root
    
    while !current.nil? || !stack.empty?
        while !current.nil?
            stack.push(current)
            current = current.left
        end
        
        current = stack.pop
        result << current.val
        current = current.right
    end
    
    result
end