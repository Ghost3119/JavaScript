function myLocalScope() {
  // Cambia solo el código debajo de esta línea
  const myVar = 10;
  console.log('inside myLocalScope', myVar);
}
myLocalScope();

// Ejecuta y verifica la consola
// myVar no está definida afuera de myLocalScope
console.log('outside myLocalScope', myVar);