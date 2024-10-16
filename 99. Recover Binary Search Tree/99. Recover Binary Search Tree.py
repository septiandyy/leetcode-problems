class Solution(object):
    def recoverTree(self, root):
	
        # the idea is the in order BST is always increasing, if not, then there is something wrong
        def inorderBST(root):
            if not root:    return
            
            # track left side to start with min
            inorderBST(root.left)

            # so that the first prev is the smallest node
            # and update each time
            if self.prev:
                
                # when order is wrong
				# check the examples in the illustration
                if self.prev.val > root.val:
                    if not self.first:
                        self.first = self.prev
                    self.second = root
            
            # update the prev node
            self.prev = root
            
            # check right side
            inorderBST(root.right)
        
        
        self.first = self.second = self.prev = None
        inorderBST(root)
        
        # swap the two wrong ones
        self.first.val, self.second.val = self.second.val, self.first.val
        
        return