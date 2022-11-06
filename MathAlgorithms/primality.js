// Determine wheather an input number is a prime number
// number thats devidable by only 1 and itselfe

function isPrime(n) {
  for (let i = 2; i < n; i++) {
    // 1
    if (n % i === 0) {
      // n
      return false; // 1
    }
  }
  return true; // 1
}

// best case, average case, worst case

// we analyse cases because we dont know what number user will put in

// best case: n = 1 || n = 2  => for loop wont run so speed is O(1) - constant
// average case: large number that is not a prime number cause last line wont run O(n)
// worst case is number = eg. 27,277 (large number) => O(n) (that is a prime number)

console.log(isPrime(5));
console.log(isPrime(9));

// in this upgrade we upgrade to square root of a number, wich will cause far less iterations

// now worst case will be: n => 27,277 => O(n) goes to O(sqrt(n))

function isPrime(n) {
  for (let i = 2; i < Math.sqrt(n); i++) {
    // 1
    if (n % i === 0) {
      // n
      return false; // 1
    }
  }
  return true; // 1
}
