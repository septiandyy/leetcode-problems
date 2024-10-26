class Solution(object):
    def getRow(self, rowIndex):
        """
        :type rowIndex: int
        :rtype: List[int]
        """
        row = [1] * (rowIndex + 1)
        
        for i in range(1, rowIndex + 1):
            prev = row[0]
            for j in range(1, i):
                temp = row[j]
                # Calculate new value using combination formula
                row[j] = prev * (rowIndex - j + 1) // j
                prev = temp
                
        return row