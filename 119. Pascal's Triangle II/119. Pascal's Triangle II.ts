function getRow(rowIndex: number): number[] {
    const row: number[] = new Array(rowIndex + 1).fill(1);
    
    for (let i = 1; i <= rowIndex; i++) {
        let prev: number = row[0];
        for (let j = 1; j < i; j++) {
            const temp = row[j];
            // Use multiplication before division to maintain precision
            row[j] = Math.floor((prev * (rowIndex - j + 1)) / j);
            prev = temp;
        }
        row[i] = 1;
    }
    
    return row;
}