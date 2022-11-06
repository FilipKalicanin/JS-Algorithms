// function factorial(n) {
//   let result = 1;
//   for (let i = 2; i < n; i++) {
//     result = i * result;
//   }
//   return result;
// }

// console.log(factorial(5));

// time complexity with this recursive function is the same as in for loop but it takes less code wich can be defining factor to use this approach

// O(n)

function factorial(n) {
  if (n <= 1) {
    return 1;
  }

  return n * factorial(n - 1);
}

console.log(factorial(5));
