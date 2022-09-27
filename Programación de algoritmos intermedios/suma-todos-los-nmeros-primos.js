function sumPrimes(num) {
  let primos = [];
  let divisible = false;
  for (let i = 2; i <= num; i++) {
    for (let j = 2; j < i; j++) {
      if (i % j === 0) {
        divisible = true;
        break;
      }
      divisible = false;
    }
    if (!divisible) {
      primos.push(i)
    }
  }
  let suma = primos.reduce((acc, el) => acc + el, 0)
  return suma;
}

sumPrimes(10);