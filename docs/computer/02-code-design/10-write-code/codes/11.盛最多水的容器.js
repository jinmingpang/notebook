/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  var left = 0; // 左指针
  var right = height.length - 1; // 右指针
  var best = 0; // 最大值

  // 如果 左指针 < 右指针
  while (left < right) {
    update(getArea(left, right));
    // 如果 左值 > 右值 （每次移动较小值）
    if (height[left] > height[right]) {
      // 右值 向左移动
      right -= 1;
    } else {
      // 左值 向右移动
      left += 1;
    }
  }

  return best;
};

// 更新 最大值
function update(curr) {
  if (curr > best) {
    best = curr;
    return true;
  }
  return false;
}

// 计算面积
function getArea(left, right) {
  var x = right - left;
  var y = Math.min(height[left], height[right]);
  return x * y;
}

// @lc code=end
