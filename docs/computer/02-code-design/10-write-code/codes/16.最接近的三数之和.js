/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 *
 * 确定1个数
 * 双指针
 *   更新值
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  var sN = nums.sort((a, b) => a - b);
  var len = nums.length;

  var best = 1e7;
  function update(curr) {
    if (Math.abs(curr - target) < Math.abs(best - target)) {
      best = curr;
    }
  }

  // 取出 第一个数据,  固定第一个数，转化为求两数之和
  for (var first = 0; first < len; first++) {
    // 去重：如果此数已经选取过，跳过
    if (first > 0 && sN[first] == sN[first - 1]) {
      continue;
    }

    // 双指针
    var left = first + 1;
    var right = len - 1;
    while (left < right) {
      var threeSum = sN[first] + sN[left] + sN[right];
      if (threeSum == target) {
        return target;
      }

      update(threeSum);

      // 和比目标大
      if (threeSum > target) {
        // 右指针左移
        right--;
      } else {
        // 和比目标小，左指针左移
        left++;
      }
    }
  }

  return best;
};

// @lc code=end
