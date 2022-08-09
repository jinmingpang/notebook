/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 * 思路：
 *  遍历每一个 元素，
 *    取出值与目标 值比较
 *      如果 当前值 >= 目标值，返回对应下标
 * 伪码：
 *  for (n of nums)
 *    n >= target ?
 *      return indexOf n
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  return binarySearch(nums, target, 0, nums.length - 1);
};

/**
 * 2分查找
 * 使用条件：一定要是排序数组，且存在目标值
 * @param { } list 待查找数组
 * @param {*} target 目标值
 * @param {*} start 开始下标
 * @param {*} end 结束下标
 * @returns
 */
function binarySearch(list, target, start, end) {
  // 当开始下标，比 结束下标，还大
  // 表示：
  //  1. 已将所有可能性全部遍历，未找到目标值
  //  2. 无需在继续执行查找，直接返回 开始下标
  if (start > end) {
    return start;
  }

  // 中间 下标
  const midIndx = Math.floor((start + end) / 2);
  // 中间 值
  const midValue = list[midIndx];

  // 恰好 等于中间值
  if (midValue === target) {
    return midValue;
  }

  if (midValue < target) {
    return binarySearch(list, target, start, midIndx - 1);
  }

  if (midIndx > target) {
    return binarySearch(list, target, midIndx + 1, end);
  }
}

// @lc code=end

/**
 * 答案：二分查找
 * 为什么这个判断？
 * if (star > end ) return start // 一直找，找到开始值大于最后一个位置，就返回start值
 *
 * // 恰好 中点 是目标值
 * find midIndex
 * v[m] = target ? v[m]
 * // 中点值 大于目标，从0，中点找
 * v[m] > target ? return s(v,target, start, mIndex - 1)
 * // 中点值 小于目标，从 中点，到最后一个
 * v[m] < target ? return s(v,target, mIndex+1, end)
 *
 */

/**
 * 
  for (var i = 0; i < nums.length; i++) {
    const curr = nums[i];
    if (curr >= target) {
      return i;
    }
  }
  return nums.length;
 */
