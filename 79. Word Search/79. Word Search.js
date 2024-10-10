function exist(board, word) {
    if (!board || board.length === 0 || word.length === 0) return false;

    const rows = board.length;
    const cols = board[0].length;

    // Helper function for DFS
    function dfs(r, c, index) {
        if (index === word.length) return true; // Found the word
        if (r < 0 || r >= rows || c < 0 || c >= cols || board[r][c] !== word[index]) return false;

        // Mark the cell as visited
        const temp = board[r][c];
        board[r][c] = '#'; // Using '#' to mark visited cell

        // Explore all 4 directions
        const found = dfs(r + 1, c, index + 1) ||
                      dfs(r - 1, c, index + 1) ||
                      dfs(r, c + 1, index + 1) ||
                      dfs(r, c - 1, index + 1);

        // Unmark the cell (backtracking)
        board[r][c] = temp;

        return found;
    }

    for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
            if (board[r][c] === word[0] && dfs(r, c, 0)) {
                return true;
            }
        }
    }

    return false;
}

// Example usage
console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCCED")); // Output: true
console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "SEE"));    // Output: true
console.log(exist([["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], "ABCB"));   // Output: false