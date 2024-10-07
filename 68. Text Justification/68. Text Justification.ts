function fullJustify(words: string[], maxWidth: number): string[] {
    const result: string[] = [];
    let start = 0, len = 0;
    
    for (let i = 0; i <= words.length; i++) {
        if (i === words.length || len + words[i].length + i - start > maxWidth) {
            let spaces = maxWidth - len;
            let gaps = i - start - 1;
            
            let line = "";
            for (let j = start; j < i; j++) {
                line += words[j];
                if (j === i - 1) break;
                
                const extraSpaces = (i === words.length || gaps === 0) ? 1 : Math.ceil(spaces / gaps);
                line += " ".repeat(extraSpaces);
                spaces -= extraSpaces;
                gaps--;
            }
            
            line += " ".repeat(spaces);
            result.push(line);
            
            start = i;
            len = 0;
        }
        if (i < words.length) len += words[i].length;
    }
    
    return result;
}