function fullJustify(words, maxWidth) {
    let result = [];
    let currentLine = [];
    let currentLength = 0;

    for (const word of words) {
        // Check if adding the next word would exceed maxWidth
        if (currentLength + currentLine.length + word.length > maxWidth) {
            // Justify the current line
            result.push(justifyLine(currentLine, currentLength, maxWidth, false));
            // Reset for the next line
            currentLine = [];
            currentLength = 0;
        }
        // Add the current word to the line
        currentLine.push(word);
        currentLength += word.length;
    }
    
    // Handle the last line (left-justified)
    result.push(justifyLine(currentLine, currentLength, maxWidth, true));
    
    return result;
}

function justifyLine(words, length, maxWidth, isLastLine) {
    if (words.length === 1) {
        // Single word in line
        return words[0] + ' '.repeat(maxWidth - length);
    }

    if (isLastLine) {
        // Left-justify the last line
        return words.join(' ') + ' '.repeat(maxWidth - length - (words.length - 1));
    }

    // Calculate number of spaces and gaps
    const totalSpaces = maxWidth - length;
    const gaps = words.length - 1;
    const spaceBetweenWords = Math.floor(totalSpaces / gaps);
    const extraSpaces = totalSpaces % gaps;

    let line = '';
    for (let i = 0; i < words.length; i++) {
        if (i > 0) {
            line += ' '.repeat(spaceBetweenWords + (i <= extraSpaces ? 1 : 0));
        }
        line += words[i];
    }

    return line;
}

// Example usage:
console.log(fullJustify(["This", "is", "an", "example", "of", "text", "justification."], 16));
// Output: ["This    is    an", "example  of text", "justification.  "]

console.log(fullJustify(["What","must","be","acknowledgment","shall","be"], 16));
// Output: ["What   must   be", "acknowledgment  ", "shall be        "]

console.log(fullJustify(["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"], 20));
// Output: ["Science  is  what we", "understand      well", "enough to explain to", "a  computer.  Art is", "everything  else  we", "do                  "]