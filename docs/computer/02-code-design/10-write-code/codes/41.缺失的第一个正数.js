/*
 * @lc app=leetcode.cn id=41 lang=javascript
 *
 * [41] 缺失的第一个正数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function (nums) {
  var min = 2;
  function update(curr) {
    if (curr > 0 && curr < min) {
      min = curr;
    }
  }
  for (var i = 0; i < nums.length; i++) {
    update(nums[i]);
  }
  return min - 1;
};

// [1,2, 4,5]
// @lc code=end
