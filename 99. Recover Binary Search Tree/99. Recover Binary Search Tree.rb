# Definition for a binary tree node.
# class TreeNode
#     attr_accessor :val, :left, :right
#     def initialize(val = 0, left = nil, right = nil)
#         @val = val
#         @left = left
#         @right = right
#     end
# end
# @param {TreeNode} root
# @return {Void} Do not return anything, modify root in-place instead.
def recover_tree(root)
    @first = nil
    @second = nil
    @prev = nil
    
    inorder(root)
    @first.val, @second.val = @second.val, @first.val
end

def inorder(node)
    return if node.nil?
    
    inorder(node.left)
    
    if @prev && node.val < @prev.val
        @first = @prev if @first.nil?
        @second = node
    end
    @prev = node
    
    inorder(node.right)
end