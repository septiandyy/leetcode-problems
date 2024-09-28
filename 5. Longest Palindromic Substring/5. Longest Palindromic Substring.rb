# @param {String} s
# @return {String}
def longest_palindrome(s)
    n = s.length
    return s if n < 2

    start, max_length = 0, 1

    (0...n).each do |i|
        # Odd length palindromes
        left, right = i, i
        while left >= 0 && right < n && s[left] == s[right]
            if right - left + 1 > max_length
                start = left
                max_length = right - left + 1
            end
            left -= 1
            right += 1
        end

        # Even length palindromes
        left, right = i, i + 1
        while left >= 0 && right < n && s[left] == s[right]
            if right - left + 1 > max_length
                start = left
                max_length = right - left + 1
            end
            left -= 1
            right += 1
        end
    end

    s[start, max_length]
end

# Example usage
puts longest_palindrome("babad")  # Output: "bab" or "aba"
puts longest_palindrome("cbbd")   # Output: "bb"