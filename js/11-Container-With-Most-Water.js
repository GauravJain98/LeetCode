/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let first = 0;
  let last = height.length - 1;

  const area = (f, l) => {
    return Math.min(height[f], height[l]) * Math.abs(f - l);
  };

  let max_area = area(first, last);

  while (first < last) {
    max_area = Math.max(max_area, area(first, last));
    height[first] < height[last] ? first++ : last-- ;
  }

  return max_area;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]));
