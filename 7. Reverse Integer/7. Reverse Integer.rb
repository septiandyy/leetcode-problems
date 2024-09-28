def reverse(x)
    rev = 0
    sign = x < 0 ? -1 : 1
    x = x.abs
    
    while x != 0
        pop = x % 10
        x /= 10
        
        # Check for overflow
        return 0 if rev > 214748364 || (rev == 214748364 && pop > 7)
        
        rev = rev * 10 + pop
    end
    
    result = sign * rev
    return 0 if result < -2**31 || result > 2**31 - 1
    result
end