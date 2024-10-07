public class Solution {
    public IList<string> FullJustify(string[] words, int maxWidth) {
        var res = new List<string>();
        var cur = new List<string>();
        int num_of_letters = 0;

        foreach (var word in words) {
            if (word.Length + cur.Count + num_of_letters > maxWidth) {
                for (int i = 0; i < maxWidth - num_of_letters; i++) {
                    cur[i % (cur.Count - 1 > 0 ? cur.Count - 1 : 1)] += " ";
                }
                res.Add(string.Join("", cur));
                cur.Clear();
                num_of_letters = 0;
            }
            cur.Add(word);
            num_of_letters += word.Length;
        }

        string lastLine = string.Join(" ", cur);
        while (lastLine.Length < maxWidth) lastLine += " ";
        res.Add(lastLine);

        return res;
    }
}