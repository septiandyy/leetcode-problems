function findSubstring(s, words) {
    let result = [];
    if (!s || !words || words.length === 0) return result;

    let wordLength = words[0].length;
    let wordCount = new Map();
    for (let word of words) {
        wordCount.set(word, (wordCount.get(word) || 0) + 1);
    }

    let totalLength = wordLength * words.length;

    for (let i = 0; i < wordLength; i++) {
        let left = i;
        let right = i;
        let windowCount = new Map();
        let count = 0;

        while (right + wordLength <= s.length) {
            let word = s.substring(right, right + wordLength);
            right += wordLength;

            if (wordCount.has(word)) {
                windowCount.set(word, (windowCount.get(word) || 0) + 1);
                if (windowCount.get(word) <= wordCount.get(word)) {
                    count++;
                }

                while (count === words.length) {
                    if (right - left === totalLength) {
                        result.push(left);
                    }
                    let leftWord = s.substring(left, left + wordLength);
                    if (wordCount.has(leftWord)) {
                        if (windowCount.get(leftWord) === wordCount.get(leftWord)) {
                            count--;
                        }
                        windowCount.set(leftWord, windowCount.get(leftWord) - 1);
                    }
                    left += wordLength;
                }
            } else {
                windowCount.clear();
                count = 0;
                left = right;
            }
        }
    }

    return result;
}

// Example usage:
console.log(findSubstring("barfoothefoobarman", ["foo", "bar"])); // Output: [0, 9]
console.log(findSubstring("wordgoodgoodgoodbestword", ["word", "good", "best", "word"])); // Output: []
console.log(findSubstring("barfoofoobarthefoobarman", ["bar", "foo", "the"])); // Output: [6, 9, 12]