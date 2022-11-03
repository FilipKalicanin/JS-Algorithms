const sumArr = (arr) => {
  let total = 0; //1
  for (let i = 0; i < arr.length; i++) {
    //1
    total += arr[i]; //n -> arr.length
  }
  return total; // 1
};

// this alg. will have linear time complexity

// linear time complexity rises with an number n O(n)
// constant time complexity executes in one line and is no conected to a number n
// eg. sumNum(5) => (n/2)*(1 + n)

console.log(sumArr([1, 3, 10]));
