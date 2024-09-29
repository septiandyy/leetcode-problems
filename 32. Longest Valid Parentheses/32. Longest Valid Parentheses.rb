# @param {String} s
# @return {Integer}
def longest_valid_parentheses(s)
    max_len = 0
    stack = [-1]

    s.each_char.with_index do |char, i|
        if char == '('
            stack.push(i)
        else
            stack.pop
            if stack.empty?
                stack.push(i)
            else
                max_len = [max_len, i - stack.last].max
            end
        end
    end

    max_len
end