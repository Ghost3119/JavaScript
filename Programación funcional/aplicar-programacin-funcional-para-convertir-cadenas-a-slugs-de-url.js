// Cambia solo el código debajo de esta línea
function urlSlug(title) {
  let newStr = title.trim().split(/\s+/).join("-");
  return newStr.toLowerCase();
}
// Cambia solo el código encima de esta línea
console.log(urlSlug("A Mind Needs Books Like A Sword Needs A Whetstone"));
console.log(urlSlug(" Winter Is  Coming"));