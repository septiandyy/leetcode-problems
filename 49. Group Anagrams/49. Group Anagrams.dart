class Solution {
  List<List<String>> groupAnagrams(List<String> strs) {
    Map<String, List<String>> anagramGroups = {};
    
    for (String str in strs) {
      List<String> charList = str.split('')..sort();
      String sortedStr = charList.join();
      
      if (!anagramGroups.containsKey(sortedStr)) {
        anagramGroups[sortedStr] = [];
      }
      anagramGroups[sortedStr]!.add(str);
    }
    
    return anagramGroups.values.toList();
  }
}