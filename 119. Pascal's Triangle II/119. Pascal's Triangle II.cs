public class Solution {
    public IList<int> GetRow(int rowIndex) {
        var row = new List<int>(rowIndex + 1);
        for (int i = 0; i <= rowIndex; i++) {
            row.Add(1);
        }
        
        for (int i = 1; i <= rowIndex; i++) {
            long prev = row[0];
            for (int j = 1; j < i; j++) {
                long temp = row[j];
                row[j] = (int)((prev * (rowIndex - j + 1)) / j);
                prev = temp;
            }
            row[i] = 1;
        }
        
        return row;
    }
}