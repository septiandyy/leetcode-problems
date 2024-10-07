# @param {String} s
# @return {Boolean}
def is_number(s)
    i = 0
    seen_digit = false
    seen_dot = false
    seen_e = false
    
    # Handle sign
    i += 1 if i < s.length && (s[i] == '+' || s[i] == '-')
    
    while i < s.length
        if s[i] =~ /[0-9]/
            seen_digit = true
        elsif s[i] == '.'
            return false if seen_dot || seen_e
            seen_dot = true
        elsif s[i] =~ /[eE]/
            return false if seen_e || !seen_digit
            seen_e = true
            seen_digit = false
            i += 1 if i + 1 < s.length && (s[i+1] == '+' || s[i+1] == '-')
        else
            return false
        end
        i += 1
    end
    
    seen_digit
end