console.clear();

const array = [8, 6, 5, 4, 3, 6, 7, 9];

function swap(array: any[], i: number, j: number) {
  let current = array[i];
  array[i] = array[j];
  array[j] = current;
}

function bubbleSort(array: any[]) {
  let isSorted = false;
  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < array.length - 1; i++) {
      if (array[i] > array[i + 1]) {
        swap(array, i, i + 1);
        isSorted = false;
      }
    }
  }
  return array;
}

bubbleSort(array);

console.log(array);
