class Solution {
  List<int> findSubstring(String s, List<String> words) {
    List<int> result = [];
    if (s.isEmpty || words.isEmpty) return result;

    int wordLength = words[0].length;
    int totalLength = wordLength * words.length;
    if (s.length < totalLength) return result;

    Map<String, int> wordCount = {};
    for (String word in words) {
      wordCount[word] = (wordCount[word] ?? 0) + 1;
    }

    for (int i = 0; i <= s.length - totalLength; i++) {
      Map<String, int> seenWords = {};
      int j;
      for (j = 0; j < words.length; j++) {
        int startIndex = i + j * wordLength;
        String currentWord = s.substring(startIndex, startIndex + wordLength);

        if (!wordCount.containsKey(currentWord)) {
          break;
        }

        seenWords[currentWord] = (seenWords[currentWord] ?? 0) + 1;

        if (seenWords[currentWord]! > wordCount[currentWord]!) {
          break;
        }
      }

      if (j == words.length) {
        result.add(i);
      }
    }

    return result;
  }
}