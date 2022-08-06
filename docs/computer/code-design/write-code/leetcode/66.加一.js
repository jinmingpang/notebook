/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 * 思路：
 * - 从右向左，遍历每一个元素
 * - n = 9 ?
 *  - 是: 0,并 记录 1，用于下一个元素+1
 *  - 不是：直接+1
 *
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let carry = 1
  for (var i = digits.length - 1; i >= 0; i--) {
    var curr = digits[i]

    // 当前 位为9，进1，继续计算
    if (curr == 9) {
      digits[i] = 0
      carry = 1
      continue
    }

    // 当前位不足 9，直接+1，结束计算
    if (curr < 9 && carry) {
      digits[i] = curr + carry
      carry = 0
      break
    }
  }

  // 如果需要全部进位，则继续进位，否则直接返回
  return carry ? [1, ...digits] : digits
}
// @lc code=end

/***
 * TOP
var plusOne = function(digits) {
  for(var i = digits.length - 1; i >= 0; i--){
    // 直接在每一位 上 +1
    digits[i]++; 
    // 如果 +1 后，> 9，则 继续向前进位
    if(digits[i] > 9){
      digits[i] = 0;
    }else{
      // +1后 <= 9，则截止计算，直接返回
      return digits;
    }
  }
  // 全部进位之后，再首位 进位1
  digits.unshift(1);

  return digits;
};

 */
