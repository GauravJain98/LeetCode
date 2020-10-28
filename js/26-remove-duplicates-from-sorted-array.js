/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
  let i = 0;
  let j = 0;

  while (j < nums.length) {
    if (nums[i] == nums[j]) {
      j++;
    } else {
      [nums[i + 1], nums[j]] = [nums[j], nums[i + 1]];
      i++;
      j++;
    }
  }

  return i + 1;
};
