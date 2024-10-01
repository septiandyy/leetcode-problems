# @param {Integer} n
# @return {String[][]}
def solve_n_queens(n)
    result = []
    board = Array.new(n) { '.' * n }
    solve(board, 0, result)
    result
end

def solve(board, col, result)
    if col == board.length
        result << board.map(&:dup)
        return
    end
    
    board.length.times do |row|
        if is_safe(board, row, col)
            board[row][col] = 'Q'
            solve(board, col + 1, result)
            board[row][col] = '.'
        end
    end
end

def is_safe(board, row, col)
    # Check this row on left side
    col.times do |i|
        return false if board[row][i] == 'Q'
    end
    
    # Check upper diagonal on left side
    i, j = row, col
    while i >= 0 && j >= 0
        return false if board[i][j] == 'Q'
        i -= 1
        j -= 1
    end
    
    # Check lower diagonal on left side
    i, j = row, col
    while j >= 0 && i < board.length
        return false if board[i][j] == 'Q'
        i += 1
        j -= 1
    end
    
    true
end