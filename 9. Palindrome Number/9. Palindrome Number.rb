# @param {Integer} x
# @return {Boolean}
def is_palindrome(x)
    # Negative numbers are not palindromes
    return false if x < 0
    
    # Find the reverse of the number
    reversed = 0
    original = x
    
    while x != 0
        reversed = reversed * 10 + x % 10
        x /= 10
    end
    
    # Compare the reversed number with the original
    original == reversed
end