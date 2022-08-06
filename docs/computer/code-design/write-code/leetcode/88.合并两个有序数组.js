/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 * 思路：
 * - 遍历 nums2 取出x
 *  - 遍历 nums1 取出y
 *  - x <= y && x_ < m ?
 *    - 设置 nums1[y] = x
 *
 * ----- 思路完全错误
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  // var insertPos = m + n - 1
  // m--
  // n--
  // while (n >= 0) {
  //   nums1[insertPos--] = nums1[m] > nums2[n] ? nums1[m--] : nums2[n--]
  // }

  /**
   *
   * 核心思路，，从大往小里找
   * 每次提取最大值，往空的地方塞（而不是2重遍历）
   *  赛完一个值，就继续往前进一
   *
   * 重点是：下标值的 变化
   *
   */
  var insertPos = m + n - 1
  m -= 1
  n -= 1
  while (n >= 0) {
    var maxN1 = nums1[m]
    var maxN2 = nums2[n]

    if (maxN1 > maxN2) {
      nums1[insertPos] = maxN1
      m -= 1
    } else {
      nums1[insertPos] = maxN2
      n -= 1
    }
    insertPos -= 1
  }
}
// @lc code=end

// debug
// merge([1, 2, 3], 3, [1, 2, 3], 3)

/**
 * 
  var insertPos = m + n - 1
  m -= 1
  n -= 1
  while (n >= 0) {
    var maxN1 = nums1[m]
    var maxN2 = nums2[n]

    if (maxN1 > maxN2) {
      nums1[insertPos] = maxN1
      m -= 1
    } else {
      nums1[insertPos] = maxN2
      n -= 1
    }
    insertPos -= 1
  }
 */

/**
  // 完全错误=-===思维混乱
  let n1_index = 0
  for (var i = 0; i < n; i++) {
    const n2 = nums2[i]
    if (n1_index >= m - 1) {
    }
    while (n1_index < m) {
      const n1 = nums1[n1_index]
      if (n1 > n2) {
        for (j = m + i - 1; j >= n1_index; j--) {
          nums1[j] = nums1[j - 1]
        }
        nums1[n1_index] = n2
        break
      }
      n1_index += 1
    }
  }
   */
