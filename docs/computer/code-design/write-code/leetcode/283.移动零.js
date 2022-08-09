/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 *
 * 简单版：
 *  1. 删除0
 *  2. 后边元素向前移动
 *  3. 末尾补0
 *
 * 不会做！！
 *    TODO：需要学会如何删除数组的值
 *
 * 答案：
 *    用一个下标，记录，并 设置当前有值的 元素
 *    遍历元素
 *      找到不为0的值
 *        使用下标 设置值，下标 后移
 *    当所有值都设置好，剩下的 下标 少于 元素 个数的值，全部补0
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  // if (nums.length > 1) {
  //   for (var i = 0; i < nums.length; i++) {
  //     if (nums[i] == 0) {
  //     }
  //   }
  // }
  var pos = 0;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] != 0) {
      nums[pos] = nums[i];
      pos += 1;
    }
  }
  for (var i = pos; i < nums.length; i++) {
    nums[i] = 0;
  }
};
// @lc code=end
