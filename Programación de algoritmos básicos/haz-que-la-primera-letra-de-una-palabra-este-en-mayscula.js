function titleCase(str) {
  const newStr = str.split(" ");
  const strMayus = [];
  for(let st in newStr){
    strMayus[st] = newStr[st][0].toUpperCase() + newStr[st].slice(1).toLowerCase();
  }
  return strMayus.join(" ");
}

titleCase("I'm a little tea pot");