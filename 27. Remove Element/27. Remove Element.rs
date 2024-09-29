// Assuming the existing Solution struct is defined like this:
// struct Solution;

// Implement the remove_element method for the existing Solution struct
impl Solution {
    pub fn remove_element(nums: &mut Vec<i32>, val: i32) -> i32 {
        let mut k = 0; // k will be the index where we place non-val elements
        
        for i in 0..nums.len() {
            if nums[i] != val {
                nums[k] = nums[i];
                k += 1;
            }
        }
        
        k as i32
    }
}

// Test function
fn test_remove_element() {
    // Test case 1
    let mut nums1 = vec![3, 2, 2, 3];
    let val1 = 3;
    let result1 = Solution::remove_element(&mut nums1, val1);
    println!("Test case 1 result: {}", result1);
    println!("Modified array: {:?}", &nums1[..result1 as usize]);

    // Test case 2
    let mut nums2 = vec![0, 1, 2, 2, 3, 0, 4, 2];
    let val2 = 2;
    let result2 = Solution::remove_element(&mut nums2, val2);
    println!("Test case 2 result: {}", result2);
    println!("Modified array: {:?}", &nums2[..result2 as usize]);
}

// Instructions for integration
/*
To use this code in your existing project:

1. Copy the impl block for Solution that contains the remove_element method.
2. In your existing main function or wherever you want to test this functionality,
   call the test_remove_element() function. For example:

   fn main() {
       // Your existing code...
       
       test_remove_element();
       
       // Rest of your code...
   }

This implementation adds the remove_element method to your existing Solution struct,
allowing you to use it as Solution::remove_element(&mut nums, val).
*/