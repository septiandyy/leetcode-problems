# @param {String} s
# @return {Integer}
def my_atoi(s)
    i = 0
    n = s.length
    
    # Step 1: Ignore leading whitespace
    while i < n && s[i] == ' '
        i += 1
    end
    
    # Step 2: Check for sign
    sign = 1
    if i < n && ['-', '+'].include?(s[i])
        sign = s[i] == '-' ? -1 : 1
        i += 1
    end
    
    # Step 3: Convert digits
    result = 0
    while i < n && s[i] =~ /\d/
        digit = s[i].to_i
        # Check for overflow
        if result > (2**31 - 1) / 10 || (result == (2**31 - 1) / 10 && digit > 7)
            return sign == 1 ? 2**31 - 1 : -2**31
        end
        result = result * 10 + digit
        i += 1
    end
    
    sign * result
end