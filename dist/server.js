"use strict";
console.clear();
const array = [8, 6, 5, 4, 3, 6, 7, 9];
function swap(array, i, j) {
    let current = array[i];
    array[i] = array[j];
    array[j] = current;
}
function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[i]) {
                swap(array, i, j);
            }
        }
    }
    return array;
}
selectionSort(array);
console.log(array);
