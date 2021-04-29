const number = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0, 1, 2];

//O(n)
//ascending
function bubbleSort_a(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        //swap number
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }

  return array;
}

console.log(bubbleSort_a(number));

//descending
function bubbleSort_b(array) {
  for (let i = 0; i < array.length - 1; i++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] < array[j + 1]) {
        //swap number
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }

  return array;
}

console.log(bubbleSort_b(number));
