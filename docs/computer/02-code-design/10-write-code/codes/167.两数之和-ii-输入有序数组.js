/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  var map = {};
  for (var i = 0; i < numbers.length; i++) {
    var o = target - numbers[i];
    if (map[o] !== undefined) {
      return [map[o] + 1, i + 1];
    }
    map[numbers[i]] = i;
  }
};

// @lc code=end
