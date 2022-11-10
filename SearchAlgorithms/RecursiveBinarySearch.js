function findElement(sortedArr, element, offset) {
  let start_index = 0;
  let end_index = sortedArr.length - 1;
  const middle_index = Math.floor((end_index - start_index) / 2);

  if (element === sortedArr[middle_index]) {
    return middle_index + offset;
  }

  if (sortedArr[middle_index] < element) {
    start_index = middle_index + 1;
    offset = offset + middle_index + 1;
  } else {
    end_index = middle_index;
  }

  return findElement(
    sortedArr.slice(start_index, end_index + 1),
    element,
    offset
  );
}

const arr = [1, 5, 9, 13, 99, 100];

console.log(findElement(arr, 99));
