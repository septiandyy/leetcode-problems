# @param {Character[][]} board
# @param {String} word
# @return {Boolean}
def exist(board, word)
    @m, @n = board.size, board[0].size
    @board, @word = board, word
    
    # Check if the board has enough characters
    char_count = Hash.new(0)
    @board.each { |row| row.each { |c| char_count[c] += 1 } }
    word.each_char do |c|
        return false if char_count[c] < word.count(c)
    end
    
    @m.times do |i|
        @n.times do |j|
            return true if dfs(i, j, 0, Set.new)
        end
    end
    false
end

def dfs(i, j, k, visited)
    return true if k == @word.length
    return false if i < 0 || i >= @m || j < 0 || j >= @n || 
                    visited.include?([i, j]) || @board[i][j] != @word[k]
    
    # Early termination
    return false if (@m * @n - visited.size) < (@word.length - k)
    
    visited.add([i, j])
    
    result = dfs(i+1, j, k+1, visited) ||
             dfs(i-1, j, k+1, visited) ||
             dfs(i, j+1, k+1, visited) ||
             dfs(i, j-1, k+1, visited)
    
    visited.delete([i, j])
    result
end