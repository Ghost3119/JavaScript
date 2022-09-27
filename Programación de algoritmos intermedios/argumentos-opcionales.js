function addTogether() {
  const [firts, second] = arguments;
  if (typeof (firts) !== "number") {
    return undefined
  } if (arguments.length === 1) {
    return (second) => addTogether(firts, second);
  } if (typeof (second) !== "number") {
    return undefined
  }
  return firts + second;
}

addTogether(2, 3);