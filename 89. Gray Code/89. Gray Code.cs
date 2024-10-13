public class Solution {
    public IList<int> GrayCode(int n) {
        int size = 1 << n;  // 2^n
        var result = new List<int>(size);
        
        for (int i = 0; i < size; i++) {
            result.Add(i ^ (i >> 1));
        }
        
        return result;
    }
}