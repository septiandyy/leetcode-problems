# @param {Integer} n
# @return {Integer}
def total_n_queens(n)
    board = Array.new(n, 0)
    solve_n_queens(board, 0, n)
end

def solve_n_queens(board, row, n)
    if row == n
        return 1
    end
    
    count = 0
    n.times do |col|
        if is_safe?(board, row, col)
            board[row] = col
            count += solve_n_queens(board, row + 1, n)
        end
    end
    
    count
end

def is_safe?(board, row, col)
    (0...row).each do |i|
        if board[i] == col || 
           board[i] - i == col - row || 
           board[i] + i == col + row
            return false
        end
    end
    true
end