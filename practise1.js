function smallestNumber(n) {
  let smallestNumber = n[0]; // 1
  for (let i = 0; i < n.length; i++) {
    // 1
    if (n[i] < smallestNumber) {
      // n
      smallestNumber = n[i]; // n
    }
  }

  return smallestNumber; // 1
}
// best case: [1, 2, 3]
// worst case: [3, 2, 1]
// average case: [2, 1, 3]
// O(n) - linear

console.log(smallestNumber([2, 3, 4, 1, 5, 0, -2, 6]));

function isEven(n) {
  return n % 2 === 0;
}
// O(1) - constant

console.log(isEven(6));
