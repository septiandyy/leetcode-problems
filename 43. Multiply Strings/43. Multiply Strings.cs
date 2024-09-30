public class Solution {
    public string Multiply(string num1, string num2) {
        int n1 = num1.Length, n2 = num2.Length;
        int[] res = new int[n1 + n2];
        
        for (int i = n1 - 1; i >= 0; i--) {
            for (int j = n2 - 1; j >= 0; j--) {
                int mul = (num1[i] - '0') * (num2[j] - '0');
                int sum = res[i + j + 1] + mul;
                
                res[i + j + 1] = sum % 10;
                res[i + j] += sum / 10;
            }
        }
        
        StringBuilder sb = new StringBuilder();
        bool leadingZero = true;
        
        foreach (int digit in res) {
            if (digit != 0 || !leadingZero) {
                sb.Append(digit);
                leadingZero = false;
            }
        }
        
        return sb.Length == 0 ? "0" : sb.ToString();
    }
}