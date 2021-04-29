const number = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

//desending
function insetionSort(array) {
  for (let i = 1; i < array.length; i++) {
    key = array[i];
    j = i - 1;
    while (j >= 0 && array[j] < key) {
      //insert
      array[j + 1] = array[j];
      j = j - 1;
    }
    array[j + 1] = key;
  }
  return array;
}

console.log(insetionSort(number));
