# @param {Float} x
# @param {Integer} n
# @return {Float}
def my_pow(x, n)
    return 1 if n == 0
    if n == -2**31
        x = 1 / x
        n = -(n + 1)
        return x * my_pow(x, n)
    end
    if n < 0
        x = 1 / x
        n = -n
    end
    result = 1.0
    while n > 0
        result *= x if n & 1 == 1
        x *= x
        n >>= 1
    end
    result
end