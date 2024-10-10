class Solution(object):
    def exist(self, board, word):
        """
        :type board: List[List[str]]
        :type word: str
        :rtype: bool
        """
        if not board or not board[0]:
            return False

        # Check if the board has enough characters
        char_count = {}
        for row in board:
            for char in row:
                char_count[char] = char_count.get(char, 0) + 1
        for char in word:
            if char_count.get(char, 0) < word.count(char):
                return False

        self.m, self.n = len(board), len(board[0])
        self.board = board
        self.word = word

        for i in range(self.m):
            for j in range(self.n):
                if self.dfs(i, j, 0, set()):
                    return True
        return False

    def dfs(self, i, j, k, visited):
        if k == len(self.word):
            return True
        if (i < 0 or i >= self.m or j < 0 or j >= self.n or 
            (i, j) in visited or self.board[i][j] != self.word[k]):
            return False

        # Early termination
        if (self.m * self.n - len(visited)) < (len(self.word) - k):
            return False

        visited.add((i, j))

        for di, dj in [(0, 1), (1, 0), (0, -1), (-1, 0)]:
            if self.dfs(i + di, j + dj, k + 1, visited):
                return True

        visited.remove((i, j))
        return False