import java.util.*;

class Solution {
    public List<Integer> findSubstring(String s, String[] words) {
        List<Integer> result = new ArrayList<>();
        if (s == null || s.isEmpty() || words == null || words.length == 0) {
            return result;
        }

        int n = s.length();
        int num = words.length;
        int len = words[0].length();

        Map<String, Integer> counts = new HashMap<>();
        for (String word : words) {
            counts.put(word, counts.getOrDefault(word, 0) + 1);
        }

        for (int i = 0; i < len; i++) {
            int left = i, count = 0;
            Map<String, Integer> seen = new HashMap<>();

            for (int j = i; j <= n - len; j += len) {
                String word = s.substring(j, j + len);

                if (counts.containsKey(word)) {
                    seen.put(word, seen.getOrDefault(word, 0) + 1);
                    count++;

                    while (seen.get(word) > counts.get(word)) {
                        String leftWord = s.substring(left, left + len);
                        seen.put(leftWord, seen.get(leftWord) - 1);
                        count--;
                        left += len;
                    }

                    if (count == num) {
                        result.add(left);
                        String leftWord = s.substring(left, left + len);
                        seen.put(leftWord, seen.get(leftWord) - 1);
                        count--;
                        left += len;
                    }
                } else {
                    seen.clear();
                    count = 0;
                    left = j + len;
                }
            }
        }

        return result;
    }
}