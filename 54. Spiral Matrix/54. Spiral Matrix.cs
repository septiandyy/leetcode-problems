public class Solution {
    public IList<int> SpiralOrder(int[][] matrix) {
        List<int> result = new List<int>();
        if (matrix == null || matrix.Length == 0 || matrix[0].Length == 0)
            return result;
        
        int m = matrix.Length, n = matrix[0].Length;
        int left = 0, right = n - 1, top = 0, bottom = m - 1;
        
        while (left <= right && top <= bottom) {
            for (int i = left; i <= right; i++)
                result.Add(matrix[top][i]);
            top++;
            
            for (int i = top; i <= bottom; i++)
                result.Add(matrix[i][right]);
            right--;
            
            if (top <= bottom) {
                for (int i = right; i >= left; i--)
                    result.Add(matrix[bottom][i]);
                bottom--;
            }
            
            if (left <= right) {
                for (int i = bottom; i >= top; i--)
                    result.Add(matrix[i][left]);
                left++;
            }
        }
        
        return result;
    }
}