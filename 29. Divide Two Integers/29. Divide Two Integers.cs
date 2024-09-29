public class Solution {
    public int Divide(int dividend, int divisor) {
        if (dividend == int.MinValue && divisor == -1) return int.MaxValue;
        
        long dvd = Math.Abs((long)dividend);
        long dvs = Math.Abs((long)divisor);
        int sign = (dividend > 0) ^ (divisor > 0) ? -1 : 1;
        long quotient = 0;
        
        while (dvd >= dvs) {
            long temp = dvs, multiple = 1;
            while (dvd >= (temp << 1)) {
                temp <<= 1;
                multiple <<= 1;
            }
            dvd -= temp;
            quotient += multiple;
        }
        
        return (int)(sign * quotient);
    }
}