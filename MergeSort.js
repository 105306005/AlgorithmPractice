//ascending
function merge(A1, A2) {
  let result = [];
  let i = 0;
  let j = 0;

  while (i < A1.length && j < A2.length) {
    if (A1[i] < A2[j]) {
      result.push(A1[i]);
      i++;
    } else {
      result.push(A2[j]);
      j++;
    }
  }
  //either A1 or A2 will have something left
  //use loop to put all remainig things into the result
  while (i < A1.length) {
    result.push(A1[i]);
    i++;
  }
  while (j < A2.length) {
    result.push(A2[j]);
    j++;
  }
  return result;
}

function mergeSort(A) {
  if (A.length === 1) {
    return A;
  } else {
    //divide
    //slpit array into left and right
    let middle = Math.floor(A.length / 2);
    let left = A.slice(0, middle);
    let right = A.slice(middle);
    console.log("left: ", left);
    console.log("right: ", right);
    return merge(mergeSort(left), mergeSort(right));
  }
}

//test
const number = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

console.log(mergeSort(number));
// console.log(merge([-1, 1, 2, 8], [3, 5]));
