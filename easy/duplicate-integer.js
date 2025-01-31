// https://neetcode.io/problems/duplicate-integer

class Solution {
  /**
   * @param {number[]} nums
   * @return {boolean}
   */
  hasDuplicate(nums) {
    const uni = new Set(nums);

    return uni.size !== nums.length;
  }
}
