// fibonacci sequence
function fib(n) {
  const fibArr = [1, 1]; // 1

  for (let i = 2; i < n + 1; i++) {
    // 1
    fibArr.push(fibArr[i - 2] + fibArr[i - 1]); // n - 1
  }
  return fibArr[n]; // 1
}

// T = 1 + 1 + 1 + 2 * (n - 1) = 3 +2n -2 = 1 + 2n = n

console.log(fib(5));
