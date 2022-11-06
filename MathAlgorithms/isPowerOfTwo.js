function isPowerOfTwo(n) {
  if (n < 1) {
    return false;
  }

  let devidedNumber = n;
  while (devidedNumber !== 1) {
    if (devidedNumber % 2 !== 0) {
      return false;
    }
    devidedNumber = devidedNumber / 2;
  }
  return true;
}

// the larger the number is, the longer will take for algorithm to finish so it indicates to O(n) BUT
// number of iterations is not following n like linear becasue for 1.000.000 alg. will run 7 times, and for 13545432345 will run 50 times
// so it will be O(log n) => logaritmic

console.log(isPowerOfTwo(5)); //false
console.log(isPowerOfTwo(8)); //true
