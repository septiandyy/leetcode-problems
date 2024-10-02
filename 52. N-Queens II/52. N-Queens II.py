class Solution(object):
    def totalNQueens(self, n):
        """
        :type n: int
        :rtype: int
        """
        def is_safe(board, row, col):
            # Check if a queen can be placed on board[row][col]
            
            # Check this row on left side
            for i in range(col):
                if board[row][i] == 1:
                    return False
            
            # Check upper diagonal on left side
            for i, j in zip(range(row, -1, -1), range(col, -1, -1)):
                if board[i][j] == 1:
                    return False
            
            # Check lower diagonal on left side
            for i, j in zip(range(row, n, 1), range(col, -1, -1)):
                if board[i][j] == 1:
                    return False
            
            return True
        
        def solve_n_queens(board, col):
            # Base case: If all queens are placed, return 1
            if col >= n:
                return 1
            
            # Consider this column and try placing this queen in all rows one by one
            count = 0
            for i in range(n):
                if is_safe(board, i, col):
                    # Place this queen in board[i][col]
                    board[i][col] = 1
                    
                    # Recur to place rest of the queens
                    count += solve_n_queens(board, col + 1)
                    
                    # Backtrack: remove queen from board[i][col]
                    board[i][col] = 0
            
            return count
        
        # Initialize the board
        board = [[0 for _ in range(n)] for _ in range(n)]
        
        # Start from the first column
        return solve_n_queens(board, 0)