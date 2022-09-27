function sumAll(arr) {
  let min = Math.min(arr[0], arr[1]);
  console.log(min)
  let max = Math.max(arr[0], arr[1]);
  console.log(max)
  let rango = 0;
  for (let i = min; i <= max; i++) {
    rango += i;
  }
  console.log(rango);
  return rango;
}

sumAll([1, 4]);