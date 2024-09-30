# @param {Character[][]} board
# @return {Boolean}
def is_valid_sudoku(board)
    rows = Array.new(9) { Array.new(9, false) }
    cols = Array.new(9) { Array.new(9, false) }
    boxes = Array.new(9) { Array.new(9, false) }
    
    9.times do |i|
        9.times do |j|
            if board[i][j] != '.'
                num = board[i][j].to_i - 1
                box_index = (i / 3) * 3 + (j / 3)
                
                return false if rows[i][num] || cols[j][num] || boxes[box_index][num]
                
                rows[i][num] = cols[j][num] = boxes[box_index][num] = true
            end
        end
    end
    
    true
end