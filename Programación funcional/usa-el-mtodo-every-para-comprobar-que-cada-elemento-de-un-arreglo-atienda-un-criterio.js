function checkPositive(arr) {
  // Cambia solo el código debajo de esta línea
  return arr.every(function(value){
    return value > 0;
  });

  // Cambia solo el código encima de esta línea
}

checkPositive([1, 2, 3, -4, 5]);