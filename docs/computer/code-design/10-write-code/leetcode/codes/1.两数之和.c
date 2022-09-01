/*
 * @lc app=leetcode.cn id=1 lang=c
 *
 * [1] 两数之和
 */

// @lc code=start

/**
 * Note: The returned array must be malloced, assume caller calls free().
 */
int *twoSum(int *nums, int numsSize, int target, int *returnSize)
{
  int *resultArr = NULL;
  *returnSize = 0;

  for (int i = 0; i < numsSize - 1; i++)
  {
    for (int j = i + 1; j < numsSize; j++)
    {
      if (nums[i] + nums[j] == target)
      {
        resultArr = (int *)malloc(sizeof(int) * 2);
        resultArr[0] = i;
        resultArr[1] = j;
        *returnSize = 2;
        return resultArr;
      }
    }
  }

  return resultArr;
}
// @lc code=end
