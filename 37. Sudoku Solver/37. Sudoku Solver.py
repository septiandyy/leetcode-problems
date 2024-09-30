class Solution(object):
    def solveSudoku(self, board):
        """
        :type board: List[List[str]]
        :rtype: None Do not return anything, modify board in-place instead.
        """
        self.solve(board)

    def solve(self, board):
        for i in range(9):
            for j in range(9):
                if board[i][j] == '.':
                    for num in '123456789':
                        if self.isValid(board, i, j, num):
                            board[i][j] = num
                            if self.solve(board):
                                return True
                            board[i][j] = '.'
                    return False
        return True

    def isValid(self, board, row, col, num):
        for x in range(9):
            if board[row][x] == num:
                return False
            if board[x][col] == num:
                return False
            if board[3 * (row // 3) + x // 3][3 * (col // 3) + x % 3] == num:
                return False
        return True