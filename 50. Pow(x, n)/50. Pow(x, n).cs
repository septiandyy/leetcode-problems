public class Solution {
    public double MyPow(double x, int n) {
        if (n == 0) return 1;
        if (n == int.MinValue) {
            x = 1 / x;
            n = -(n + 1);
            return x * MyPow(x, n);
        }
        if (n < 0) {
            x = 1 / x;
            n = -n;
        }
        double result = 1;
        while (n > 0) {
            if ((n & 1) == 1) result *= x;
            x *= x;
            n >>= 1;
        }
        return result;
    }
}