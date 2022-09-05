/*
 * @lc app=leetcode.cn id=4 lang=javascript
 *
 * [4] 寻找两个正序数组的中位数
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
  var len1 = nums1.length;
  var len2 = nums2.length;

  // 统一 len1 + len2 为偶数的情况
  var left = Math.floor((len1 + len2 + 1) / 2); // 中位数1
  var right = Math.floor((len1 + len2 + 2) / 2); // 中位数2

  // 找到中位数 1
  var leftN = getKth(nums1, 0, len1 - 1, nums2, 0, len2 - 1, left);
  // 找到中位数 2
  var rightN = getKth(nums1, 0, len1 - 1, nums2, 0, len2 - 1, right);

  // 返回 唯一的 中位数
  var midN = (leftN + rightN) / 2;

  return midN;
};

// 寻找第K小的数
function getKth(nums1, start1, end1, nums2, start2, end2, k) {
  var newLen1 = end1 - start1 + 1; // nums1 长度
  var newLen2 = end2 - start2 + 1; // nums2 长度

  /**
   * 递归出口---开始
   * =================
   */
  // 如果nums1已经 遍历结束， 转换为单有序列表第k小数，只需要取 nums2 指定位置的值即可
  if (newLen1 == 0) {
    return nums2[start2 + (k - 1)];
  }

  // 如果nums2已经 遍历结束，转换为单有序列表第k小数，只需要取 nums1 指定位置的值即可
  if (newLen2 == 0) {
    return nums1[start1 + (k - 1)];
  }

  // 最小数，只需要，取两个列表最左端的值，取教小值。
  if (k == 1) {
    return Math.min(nums1[start1], nums2[start2]);
  }
  /**
   * 递归出口---结束
   * =================
   */

  // nums1 需要取出的值 下标  mid1
  var mid1 = start1 + (Math.min(newLen1, Math.floor(k / 2)) - 1);
  // nums2 需要取出的值 下标  mid2
  var mid2 = start2 + (Math.min(newLen2, Math.floor(k / 2)) - 1);

  // 如果 中间值 较小，就去抹去对应数量的值
  if (nums1[mid1] > nums2[mid2]) {
    return getKth(
      nums1,
      start1,
      end1,
      nums2,
      mid2 + 1,
      end2,
      // 下一轮k值
      k - (mid2 - start2 + 1),
    );
  }

  return getKth(
    nums1,
    mid1 + 1,
    end1,
    nums2,
    start2,
    end2,
    // 下一轮k值
    k - (mid1 - start1 + 1),
  );
}

// @lc code=end
