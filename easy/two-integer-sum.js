https://neetcode.io/problems/two-integer-sum

class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        for (let i = 0; i < nums.length; i++) {
            const curr = nums[i]

            for (let ii = 0 + i; ii < nums.length; ii++) {
                    if ( curr + nums[ii] === target) {
                        return [i, ii]
                    }
                }

            }

        }
}