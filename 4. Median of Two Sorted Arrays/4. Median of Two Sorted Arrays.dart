import 'dart:math';

class Solution {
  double findMedianSortedArrays(List<int> nums1, List<int> nums2) {
    if (nums1.length > nums2.length) {
      return findMedianSortedArrays(nums2, nums1);
    }
    
    int m = nums1.length;
    int n = nums2.length;
    int left = 0, right = m;
    
    while (left <= right) {
      int partitionX = (left + right) ~/ 2;
      int partitionY = ((m + n + 1) ~/ 2) - partitionX;
      
      int maxLeftX = (partitionX == 0) ? -2147483648 : nums1[partitionX - 1];
      int minRightX = (partitionX == m) ? 2147483647 : nums1[partitionX];
      
      int maxLeftY = (partitionY == 0) ? -2147483648 : nums2[partitionY - 1];
      int minRightY = (partitionY == n) ? 2147483647 : nums2[partitionY];
      
      if (maxLeftX <= minRightY && maxLeftY <= minRightX) {
        if ((m + n) % 2 == 0) {
          return (max(maxLeftX, maxLeftY) + min(minRightX, minRightY)) / 2;
        } else {
          return max(maxLeftX, maxLeftY).toDouble();
        }
      } else if (maxLeftX > minRightY) {
        right = partitionX - 1;
      } else {
        left = partitionX + 1;
      }
    }
    
    throw ArgumentError("Input arrays are not sorted.");
  }
}