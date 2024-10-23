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
def flatten(root)
    curr = root
    while curr
        if curr.left
            prev = curr.left
            while prev.right
                prev = prev.right
            end
            prev.right = curr.right
            curr.right = curr.left
            curr.left = nil
        end
        curr = curr.right
    end
end