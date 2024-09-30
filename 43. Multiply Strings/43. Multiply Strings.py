class Solution(object):
    def multiply(self, num1, num2):
        """
        :type num1: str
        :type num2: str
        :rtype: str
        """
        if num1 == "0" or num2 == "0":
            return "0"
        
        n1, n2 = len(num1), len(num2)
        res = [0] * (n1 + n2)
        
        for i in range(n1 - 1, -1, -1):
            for j in range(n2 - 1, -1, -1):
                mul = int(num1[i]) * int(num2[j])
                p1, p2 = i + j, i + j + 1
                total = mul + res[p2]
                
                res[p2] = total % 10
                res[p1] += total // 10
        
        # Convert the result to a string and remove leading zeros
        result = "".join(map(str, res)).lstrip("0")
        
        return result if result else "0"