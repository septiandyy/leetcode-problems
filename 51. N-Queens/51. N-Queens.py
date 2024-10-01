class Solution(object):
    def solveNQueens(self, n):
        """
        :type n: int
        :rtype: List[List[str]]
        """
        def create_board():
            return ['.' * n for _ in range(n)]
        
        def is_safe(board, row, col):
            # Check this row on left side
            for i in range(col):
                if board[row][i] == 'Q':
                    return False
            
            # Check upper diagonal on left side
            for i, j in zip(range(row, -1, -1), range(col, -1, -1)):
                if board[i][j] == 'Q':
                    return False
            
            # Check lower diagonal on left side
            for i, j in zip(range(row, n, 1), range(col, -1, -1)):
                if board[i][j] == 'Q':
                    return False
            
            return True
        
        def backtrack(board, col):
            if col == n:
                result.append([''.join(row) for row in board])
                return
            
            for i in range(n):
                if is_safe(board, i, col):
                    board[i] = board[i][:col] + 'Q' + board[i][col+1:]
                    backtrack(board, col + 1)
                    board[i] = board[i][:col] + '.' + board[i][col+1:]
        
        result = []
        backtrack(create_board(), 0)
        return result