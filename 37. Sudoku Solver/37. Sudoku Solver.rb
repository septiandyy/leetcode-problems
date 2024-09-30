# @param {Character[][]} board
# @return {Void} Do not return anything, modify board in-place instead.
def solve_sudoku(board)
    solve(board)
end

def is_valid(board, row, col, num)
    9.times do |x|
        return false if board[row][x] == num
        return false if board[x][col] == num
        return false if board[3 * (row / 3) + x / 3][3 * (col / 3) + x % 3] == num
    end
    true
end

def solve(board)
    9.times do |row|
        9.times do |col|
            if board[row][col] == '.'
                ('1'..'9').each do |num|
                    if is_valid(board, row, col, num)
                        board[row][col] = num
                        return true if solve(board)
                        board[row][col] = '.'
                    end
                end
                return false
            end
        end
    end
    true
end