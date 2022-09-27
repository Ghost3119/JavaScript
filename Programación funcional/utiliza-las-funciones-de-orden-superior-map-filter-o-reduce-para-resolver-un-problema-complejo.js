const squareList = arr => {
  // Cambia solo el código debajo de esta línea
  let newArr = arr.filter(num => num > 0 && num % parseInt(num) === 0).map(num => Math.pow(num, 2));

  return newArr;
  // Cambia solo el código encima de esta línea
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);