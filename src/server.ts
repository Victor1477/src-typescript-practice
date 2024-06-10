console.clear();

const array = [9, 2, 8, 3, 5, 10];

function findMaxSum(array: number[], n: number) {
  let left = 0;
  let max = 0;
  let temp = 0;

  for (let right = 0; right < array.length; right++) {
    if (right < n) {
      max += array[right];
      temp = max;
    } else {
      temp = temp + array[right] - array[left];
      max = Math.max(max, temp);
      left++;
    }
  }

  return max;
}

console.log(findMaxSum(array, 2));
