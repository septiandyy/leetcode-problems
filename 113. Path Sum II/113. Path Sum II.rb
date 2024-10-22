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
# @param {Integer} target_sum
# @return {Integer[][]}
def path_sum(root, target_sum)
    @result = []
    find_paths(root, target_sum, [])
    @result
end

def find_paths(root, target_sum, path)
    return if root.nil?
    
    path.push(root.val)
    
    if root.left.nil? && root.right.nil? && target_sum == root.val
        @result.push(path.dup)
    end
    
    find_paths(root.left, target_sum - root.val, path)
    find_paths(root.right, target_sum - root.val, path)
    
    path.pop
end