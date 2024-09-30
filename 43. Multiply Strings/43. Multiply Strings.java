class Solution {
    public String multiply(String num1, String num2) {
        int n1 = num1.length(), n2 = num2.length();
        int[] res = new int[n1 + n2];
        
        for (int i = n1 - 1; i >= 0; i--) {
            for (int j = n2 - 1; j >= 0; j--) {
                int mul = (num1.charAt(i) - '0') * (num2.charAt(j) - '0');
                int sum = res[i + j + 1] + mul;
                
                res[i + j + 1] = sum % 10;
                res[i + j] += sum / 10;
            }
        }
        
        StringBuilder sb = new StringBuilder();
        boolean leadingZero = true;
        
        for (int digit : res) {
            if (digit != 0 || !leadingZero) {
                sb.append(digit);
                leadingZero = false;
            }
        }
        
        return sb.length() == 0 ? "0" : sb.toString();
    }
}