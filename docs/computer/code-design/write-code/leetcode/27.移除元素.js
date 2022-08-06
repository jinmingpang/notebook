/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
  let i = 0
  // 遍历 每一个元素
  for (let j = 0; j < nums.length; j++) {
    const curr = nums[j]
    if (curr !== val) {
      nums[i] = curr
      i += 1
    }
  }

  return i
}
// @lc code=end
