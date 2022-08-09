/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 * 思路：
 *  遍历每一个值
 *    判断是否 存在当前值的索引
 *      如果有，判断 是否 满足条件
 *        不满足：contiune
 *      存储当前值的索引
 * 伪代码
 *  map = {}
 *  for(n of nums)
 *     idx = map[n] || -1
 *     idx >= 0 && abs(idx - currIdx) <= k ? return true
 *      map[n] = currIdx
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  const map = {
    [nums[0]]: 0,
  };
  for (let i = 1; i < nums.length; i++) {
    // const preIdx = map[nums[i]];
    // if (preIdx >= 0 && Math.abs(i - preIdx) <= k) {
    //   return true;
    // }
    if (i - map[nums[i]] <= k) {
      return true;
    }
    map[nums[i]] = i;
  }

  return false;
};
// @lc code=end
