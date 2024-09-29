def divide(dividend, divisor)
    return 2**31 - 1 if dividend == -2**31 && divisor == -1
    
    dvd = dividend.abs
    dvs = divisor.abs
    sign = (dividend > 0) ^ (divisor > 0) ? -1 : 1
    quotient = 0
    
    while dvd >= dvs
        temp = dvs
        multiple = 1
        while dvd >= (temp << 1)
            temp <<= 1
            multiple <<= 1
        end
        dvd -= temp
        quotient += multiple
    end
    
    sign * quotient
end