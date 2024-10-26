class Solution {
public:
    vector<int> getRow(int rowIndex) {
        vector<int> row(rowIndex + 1, 1);
        
        for (int i = 1; i <= rowIndex; i++) {
            long long prev = row[0];
            for (int j = 1; j < i; j++) {
                long long temp = row[j];
                row[j] = (prev * (rowIndex - j + 1)) / j;
                prev = temp;
            }
            row[i] = 1;
        }
        
        return row;
    }
};