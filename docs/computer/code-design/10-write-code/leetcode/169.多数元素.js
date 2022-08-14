/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 * 思路：
 *  建立一个map存储所有值的数量
 *  遍历每一个值，
 *    将当前值放入map中计数
 *  直到某一个数的数量大于 n/2
 *
 * 伪代码
 *  map = {}
 *  for(n of nums)
 *    var currCount = map[n] || 0
 *    map[n] = ++currCount
 *    currCount > numsLength / 2 ? return n
 *
 * 牛逼：和目标答案一致
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const cacheCountMap = {};
  for (var i = 0; i < nums.length; i++) {
    const curr = nums[i];
    let currCount = cacheCountMap[curr] || 0;
    cacheCountMap[curr] = ++currCount;
    if (cacheCountMap[curr] > nums.length / 2) {
      return curr;
    }
  }
};
// @lc code=end
