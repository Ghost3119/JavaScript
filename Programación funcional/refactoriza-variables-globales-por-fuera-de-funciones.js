// La variable global
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Cambia el código debajo de esta línea
function add(list,bookName) {
  return [...list,bookName]

  // Cambia el código encima de esta línea
}

// Cambia el código debajo de esta línea
function remove(list,bookName) {
    return list.filter(book =>  book !==bookName)
    // Cambia el código encima de esta línea
}