/*
 * @lc app=leetcode.cn id=15 lang=javascript
 * 思路错误，导致计算复杂，且无法满足答案
 * [15] 三数之和
 *
 */
// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  var nums = nums.sort((a, b) => a - b);
  var size = nums.length;
  var results = [];
  // 取出 第一个数据,  固定第一个数，转化为求两数之和
  for (var i = 0; i < size; i++) {
    // 第一个数大于 0，后面都是递增正数，不可能相加为零了
    if (nums[i] > 0) {
      return results;
    }
    // 去重：如果此数已经选取过，跳过
    if (i > 0 && nums[i] == nums[i - 1]) {
      continue;
    }

    // 双指针在nums[i]后面的区间中寻找和为0-nums[i]的另外两个数
    var left = i + 1;
    var right = size - 1;
    while (left < right) {
      // 两数之和太大，右指针左移
      if (nums[left] + nums[right] > -nums[i]) {
        right--;
        continue;
      }

      // 两数之和太小，左指针右移
      if (nums[left] + nums[right] < -nums[i]) {
        left++;
        continue;
      }

      // 找到一个和为零的三元组，添加到结果中，左右指针内缩，继续寻找
      results.push([nums[i], nums[left], nums[right]]);
      left++;
      right--;

      // 去重：第二个数和第三个数也不重复选取
      // 例如：[-4,1,1,1,2,3,3,3], i=0, left=1, right=5
      while (left < right && nums[left] == nums[left - 1]) {
        left++;
      }
      while (left < right && nums[right] == nums[right + 1]) {
        right--;
      }
    }
  }
  return results;
};

// var threeSum = function (nums) {
//   var sortNums = nums.sort();
//   var results = [];
//   for (var i = 0; i < sortNums.length; i++) {
//     if (i == 0 || sortNums[i] != sortNums[i - 1]) {
//       for (var j = i + 1; j < sortNums.length; j++) {
//         if (j == i + 1 || sortNums[j] != sortNums[j - 1]) {
//           for (var k = j + 1; k < sortNums.length; k++) {
//             if (k == j + 1 || sortNums[k] != sortNums[k - 1]) {
//               if (sortNums[i] + sortNums[j] + sortNums[k] == 0) {
//                 results.push([sortNums[i], sortNums[j], sortNums[k]]);
//               }
//             }
//           }
//         }
//       }
//     }
//   }
//   return results;
// };

// var threeSum = function (nums) {
//   var sortNums = nums.sort((a, b) => a - b);
//   var results = [];
//   // 取出 第一个数据
//   for (var i = 0; i < sortNums.length; ++i) {
//     // 一定取除第一个，然后跳过 相同的数
//     if (i > 0 && sortNums[i] == sortNums[i - 1]) {
//       continue;
//     }

//     // 第三个数的指针
//     var right = sortNums.length - 1;
//     // 第二个数，与第三个数的  条件值

//     // 遍历第2个数
//     for (var left = i + 1; j < sortNums.length; ++j) {
//       // 取出第一个数，然后跳过 相同的数
//       if (left > i + 1 && sortNums[left] == sortNums[left - 1]) {
//         continue;
//       }

//       // 保证 第二个数在第三个数左边，
//       while (left < right && sortNums[left] + sortNums[right] >  -sortNums[i]) {
//         --third;
//       }

//       // 如果 第2个数，与 第三个数，相同，跳出循环
//       // 如果指针重合，随着 b 后续的增加， 就不会有满足 a+b+c=0 并且 b<c 的 c 了，可以退出循环
//       if (left == right) {
//         break;
//       }
//       if (sortNums[left] + sortNums[right] ==  -sortNums[i]) {
//         results.push([sortNums[i], sortNums[j], sortNums[third]]);
//       }
//     }
//   }
//   return results;
// };
