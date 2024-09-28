class Solution(object):
    def intToRoman(self, num):
        """
        :type num: int
        :rtype: str
        """
        # Define the mapping of integers to Roman numerals
        val = [
            1000, 900, 500, 400,
            100, 90, 50, 40,
            10, 9, 5, 4,
            1
        ]
        syms = [
            "M", "CM", "D", "CD",
            "C", "XC", "L", "XL",
            "X", "IX", "V", "IV",
            "I"
        ]
        
        roman_numeral = ""
        
        # Loop through each value-symbol pair
        for i in range(len(val)):
            # While the current number is greater than or equal to the value
            while num >= val[i]:
                # Append the corresponding symbol
                roman_numeral += syms[i]
                # Subtract the value from num
                num -= val[i]
        
        return roman_numeral

# Example usage:
solution = Solution()
print(solution.intToRoman(3749))  # Output: "MMMDCCXLIX"
print(solution.intToRoman(58))    # Output: "LVIII"
print(solution.intToRoman(1994))   # Output: "MCMXCIV"