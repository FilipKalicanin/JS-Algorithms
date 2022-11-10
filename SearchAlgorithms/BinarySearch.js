// for this algorithm array needs to be sorted

function findElement(sortedArr, element) {
  let start_index = 0;
  let end_index = sortedArr.length - 1;

  while (start_index <= end_index) {
    const middle_index =
      start_index + Math.floor((end_index - start_index) / 2);

    if (element === sortedArr[middle_index]) {
      return middle_index;
    }

    if (sortedArr[middle_index] < element) {
      start_index = middle_index + 1;
    } else {
      end_index = middle_index - 1;
    }
  }
}

const arr = [1, 5, 9, 13, 99, 100];

console.log(findElement(arr, 99));
