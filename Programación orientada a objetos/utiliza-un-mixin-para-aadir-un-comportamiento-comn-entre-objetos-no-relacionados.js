let bird = {
  name: "Donald",
  numLegs: 2
};

let boat = {
  name: "Warrior",
  type: "race-boat"
};

// Cambia solo el código debajo de esta línea
let glideMixin = function (obj) {
  obj.glide = function () {
    console.log("I'm planning");
  };
};
glideMixin(bird);
bird.glide();
glideMixin(boat);
boat.glide();