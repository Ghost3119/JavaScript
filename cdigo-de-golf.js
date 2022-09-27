const names = ["Hole-in-one!", "Eagle", "Birdie", "Par", "Bogey", "Double Bogey", "Go Home!"];

/* "Hole-in-one!" = 0
, "Eagle" = 1
, "Birdie" = 2
, "Par" = 3
, "Bogey" = 4
, "Double Bogey" = 5
, "Go Home! = 6 */ 
function golfScore(par, strokes) {
  // Cambia solo el código debajo de esta línea
  if (strokes == 1) {
    return names[0];
  }
  else if (strokes <= par - 2) {
    return names[1];
  }
  else if (strokes === par - 1) {
    return names[2];
  }
  else if (strokes === par) {
    return names[3];
  }
  else if (strokes === par + 1) {
    return names[4];
  }
  else if (strokes === par + 2) {
    return names[5];
  }
  else{
    return names[6];
  }
  return "Change Me";
  // Cambia solo el código encima de esta línea
}

golfScore(5, 4);