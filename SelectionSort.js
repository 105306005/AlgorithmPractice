const number = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0, 1, 2];

//ascending
function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    //don't need to sort the last one
    minIndex = i;
    for (let j = i; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;
      }
    }
    let temp = array[i];
    array[i] = array[minIndex];
    array[minIndex] = temp;
  }
  return array;
}

console.log(selectionSort(number));
