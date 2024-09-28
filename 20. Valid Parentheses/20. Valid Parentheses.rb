def is_valid(s)
    stack = []
    s.each_char do |c|
        if c == '(' || c == '{' || c == '['
            stack.push(c)
        else
            return false if stack.empty?
            return false if (c == ')' && stack.last != '(') ||
                            (c == '}' && stack.last != '{') ||
                            (c == ']' && stack.last != '[')
            stack.pop
        end
    end
    stack.empty?
end