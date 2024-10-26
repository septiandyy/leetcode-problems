class Solution {
    public List<Integer> getRow(int rowIndex) {
        List<Integer> row = new ArrayList<>(rowIndex + 1);
        for (int i = 0; i <= rowIndex; i++) {
            row.add(1);
        }
        
        for (int i = 1; i <= rowIndex; i++) {
            long prev = row.get(0);
            for (int j = 1; j < i; j++) {
                long temp = row.get(j);
                row.set(j, (int)((prev * (rowIndex - j + 1)) / j));
                prev = temp;
            }
        }
        
        return row;
    }
}