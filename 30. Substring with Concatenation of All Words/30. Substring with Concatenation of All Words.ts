function findSubstring(s: string, words: string[]): number[] {
    const result: number[] = [];
    if (s.length === 0 || words.length === 0) {
        return result;
    }

    const wordLength: number = words[0].length;
    const totalLength: number = wordLength * words.length;
    if (s.length < totalLength) {
        return result;
    }

    const wordCount: Map<string, number> = new Map();
    for (const word of words) {
        wordCount.set(word, (wordCount.get(word) || 0) + 1);
    }

    for (let i = 0; i <= s.length - totalLength; i++) {
        const seenWords: Map<string, number> = new Map();
        let j: number;
        for (j = 0; j < words.length; j++) {
            const startIndex: number = i + j * wordLength;
            const currentWord: string = s.substring(startIndex, startIndex + wordLength);

            if (!wordCount.has(currentWord)) {
                break;
            }

            seenWords.set(currentWord, (seenWords.get(currentWord) || 0) + 1);

            if (seenWords.get(currentWord)! > wordCount.get(currentWord)!) {
                break;
            }
        }

        if (j === words.length) {
            result.push(i);
        }
    }

    return result;
}