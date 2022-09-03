/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 * 思路：
 *  遍历每一个值，判断存在的次数
 *
 * 要点：
 *   此处，知识判断是否已经存在，不需要计数，直接用 ture/false 来确定即可
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const cache = {};
  for (let i = 0; i < nums.length; i++) {
    if (cache[nums[i]]) {
      return true;
    }
    cache[nums[i]] = true;
  }
  return false;
};
// @lc code=end
