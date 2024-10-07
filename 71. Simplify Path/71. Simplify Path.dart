class Solution {
  String simplifyPath(String path) {
    final stack = <String>[];
    final parts = path.split('/');
    
    for (final part in parts) {
      if (part == '.' || part.isEmpty) continue;
      if (part == '..') {
        if (stack.isNotEmpty) stack.removeLast();
      } else {
        stack.add(part);
      }
    }
    
    return '/' + stack.join('/');
  }
}