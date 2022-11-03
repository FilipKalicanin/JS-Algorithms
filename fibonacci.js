// fibonacci sequence
function fib(n) {
  const fibArr = [1, 1];

  for (let i = 2; i < n + 1; i++) {
    fibArr.push(fibArr[i - 2] + fibArr[i - 1]);
  }
  return fibArr[n];
}

console.log(fib(5));
