# @param {String} digits
# @return {String[]}
def letter_combinations(digits)
    return [] if digits.empty?
    
    letter_map = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"]
    result = []
    
    def backtrack(digits, index, current, result, letter_map)
        if index == digits.length
            result << current.join
            return
        end
        
        letters = letter_map[digits[index].to_i]
        letters.each_char do |c|
            current.push(c)
            backtrack(digits, index + 1, current, result, letter_map)
            current.pop
        end
    end
    
    backtrack(digits, 0, [], result, letter_map)
    result
end