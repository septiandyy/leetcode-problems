public class Solution {
    public IList<IList<string>> GroupAnagrams(string[] strs) {
        var anagramGroups = new Dictionary<string, List<string>>();
        
        foreach (var str in strs) {
            var sortedStr = new string(str.OrderBy(c => c).ToArray());
            if (!anagramGroups.ContainsKey(sortedStr)) {
                anagramGroups[sortedStr] = new List<string>();
            }
            anagramGroups[sortedStr].Add(str);
        }
        
        return new List<IList<string>>(anagramGroups.Values);
    }
}