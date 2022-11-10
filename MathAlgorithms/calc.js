function prost_broj(n) {
  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}

function prosti_brojevi(x) {
  const niz = [];
  let i = 2;
  while (niz.length < x) {
    if (prost_broj(i)) {
      niz.push(i);
    }
    if (i === 2) {
      i = i + 1;
    } else {
      i = i + 2;
    }
  }
  return niz;
}
console.log(prosti_brojevi(17));
