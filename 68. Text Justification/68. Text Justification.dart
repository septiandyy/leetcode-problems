class Solution {
  List<String> fullJustify(List<String> words, int maxWidth) {
    List<String> result = [];
    int start = 0, len = 0;
    
    for (int i = 0; i <= words.length; i++) {
      if (i == words.length || len + words[i].length + i - start > maxWidth) {
        int spaces = maxWidth - len;
        int gaps = i - start - 1;
        
        StringBuffer sb = StringBuffer();
        for (int j = start; j < i; j++) {
          sb.write(words[j]);
          if (j == i - 1) break;
          
          int extraSpaces = (i == words.length || gaps == 0) ? 1 : (spaces ~/ gaps) + (spaces % gaps > 0 ? 1 : 0);
          sb.write(' ' * extraSpaces);
          spaces -= extraSpaces;
          gaps--;
        }
        
        sb.write(' ' * spaces);
        result.add(sb.toString());
        
        start = i;
        len = 0;
      }
      if (i < words.length) len += words[i].length;
    }
    
    return result;
  }
}