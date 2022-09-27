function sliceArray(anim, beginSlice, endSlice) {
  // Cambia solo el código debajo de esta línea
  let newArr = anim.slice(beginSlice,endSlice);
  return newArr;
  // Cambia solo el código encima de esta línea
}

const inputAnim = ["Cat", "Dog", "Tiger", "Zebra", "Ant"];
sliceArray(inputAnim, 1, 3);