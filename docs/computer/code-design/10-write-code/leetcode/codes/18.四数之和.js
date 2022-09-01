/*
 * @lc app=leetcode.cn id=18 lang=javascript
 *
 * [18] 四数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  var results = [];
  var sN = nums.sort((a, b) => a - b);
  var len = sN.length;
  for (var first = 0; first < len; first++) {
    // 相同的数 跳过
    if (first > 0 && sN[first] == sN[first - 1]) {
      continue;
    }

    // 确定一个数
    // 如果  最小的四个数都超过 目标，退出
    if (sN[first] + sN[first + 1] + sN[first + 2] + sN[first + 3] > target) {
      break;
    }

    // 如果 最大的四个数都小于 目标，进入下一个
    if (sN[first] + sN[len - 1] + sN[len - 2] + sN[len - 3] < target) {
      continue;
    }

    // 确定2个数
    for (var second = first + 1; second < len; second++) {
      // 跳过相同的数
      if (second > first + 1 && sN[second] == sN[second - 1]) {
        continue;
      }

      // 最小的四个数 大于目标。退出
      if (sN[first] + sN[second] + sN[second + 1] + sN[second + 2] > target) {
        break;
      }

      // 最大的四个数 小于目标值，进入下一个
      if (sN[first] + sN[second] + sN[len - 1] + sN[len - 2] < target) {
        continue;
      }

      // 核心计算逻辑
      var left = second + 1;
      var right = len - 1;
      var twoSumTarget = target - sN[first] - sN[second];
      while (left < right) {
        // 如果 和 过大 (会自动剔除重复值)
        if (sN[left] + sN[right] > twoSumTarget) {
          right--;
          continue;
        }

        // 如果 和 过小 (会自动剔除重复值)
        if (sN[left] + sN[right] < twoSumTarget) {
          left++;
          continue;
        }

        // 符合条件值，继续内缩
        results.push([sN[first], sN[second], sN[left], sN[right]]);
        left++;
        right--;

        // 剔除重复值
        // 注意是 从左向右，因此，是当前值为[i],上一个值[i-1]
        while (left < right && sN[left] == sN[left - 1]) {
          left++;
        }
        // 注意是 从右向左，因此，是当前值为[i],上一个值[i+1]
        while (left < right && sN[right] == sN[right + 1]) {
          right--;
        }
      }
    }
  }

  return results;
};
// @lc code=end
