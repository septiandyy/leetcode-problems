function convert(s: string, numRows: number): string {
    if (numRows === 1) return s;
    
    const rows: string[] = new Array(Math.min(numRows, s.length)).fill('');
    let curRow = 0;
    let goingDown = false;
    
    for (const c of s) {
        rows[curRow] += c;
        if (curRow === 0 || curRow === numRows - 1) goingDown = !goingDown;
        curRow += goingDown ? 1 : -1;
    }
    
    return rows.join('');
}