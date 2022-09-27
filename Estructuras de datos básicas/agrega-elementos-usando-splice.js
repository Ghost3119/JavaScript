function htmlColorNames(arr) {
  // Cambia solo el código debajo de esta línea
  const startIndex = 0;
  const amountToDelete = 2;
  arr.splice(startIndex,amountToDelete,'DarkSalmon','BlanchedAlmond')
  // Cambia solo el código encima de esta línea
  return arr;
}

console.log(htmlColorNames(['DarkGoldenRod', 'WhiteSmoke', 'LavenderBlush', 'PaleTurquoise', 'FireBrick']));