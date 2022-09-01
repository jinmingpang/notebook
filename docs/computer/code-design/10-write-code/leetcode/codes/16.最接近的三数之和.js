/*
 * @lc app=leetcode.cn id=16 lang=javascript
 *
 * [16] 最接近的三数之和
 *
 * 1. 抽离关键 update 更新方法
 *  Math.abs(cur-target) < Math.abs(best-target) ====> base = curr;
 * if (sum > target) {
 *   向右移动
 *   跳过相同的值
 * } else {
 *   向左移动
 *   跳过相同的值
 * }
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
  var sortNums = nums.sort((a, b) => a - b);
  var len = sortNums.length;

  var best = 1e7;
  var update = (curr) => {
    if (Math.abs(curr - target) < Math.abs(best - target)) {
      best = curr;
    }
  };

  for (var first = 0; first < len; first++) {
    if (first > 0 && sortNums[first] == sortNums[first - 1]) {
      continue;
    }
    var left = first + 1;
    var right = len - 1;
    while (left < right) {
      var sum = sortNums[first] + sortNums[left] + sortNums[right];
      if (sum == target) {
        return target;
      }
      update(sum);
      if (sum > target) {
        right--;
        while (left < right && sortNums[right] == sortNums[right - 1]) {
          right--;
        }
      } else {
        left++;
        while (left < right && sortNums[left] == sortNums[left - 1]) {
          left++;
        }
      }
    }
  }

  return best;
};
// @lc code=end

var a = threeSumClosest([-4, -1, 1, 2], 0);
console.log('--a>', a);

/*

// 最近一次结果
  var sortNums = nums.sort((a, b) => a - b);
  var lastDiff = Math.abs(
    target - (sortNums[0] + sortNums[1] + sortNums[sortNums.length - 1]),
  );
  var result = 0;
  for (var first = 0; first < sortNums.length; first++) {
    if (first > 0 && sortNums[first] == sortNums[first - 1]) {
      continue;
    }
    var left = first + 1;
    var right = sortNums.length - 1;
    while (left < right) {
      var sum = sortNums[first] + sortNums[left] + sortNums[right];
      var diff = Math.abs(target - sum);
      if (diff == 0) {
        lastDiff = 0;
        return sum;
      }
      // console.log('==>', { diff, lastDiff, sum }, [
      //   sortNums[first],
      //   sortNums[left],
      //   sortNums[right],
      // ]);
      // 判断有问题
      if (diff <= lastDiff) {
        result = sum;
        lastDiff = diff
        right--;
      } else {
        left++;
      }

      while (left < right && sortNums[left] == sortNums[left - 1]) {
        left++;
      }
      while (left < right && sortNums[right] == sortNums[right - 1]) {
        right--;
      }
    }
  }
  return result;
  */
