function rot13(str) {
  let arr = str.split('');
  let resultArr = [];
  for (let i = 0; i < arr.length; i++) {
    const charInicial = arr[i].charCodeAt(0);
    if (charInicial > 64 && charInicial < 91) {
      const rotCode = charInicial < 78 ? charInicial + 13 : charInicial - 13;
      resultArr.push(String.fromCharCode(rotCode));
    } else {
      resultArr.push(String.fromCharCode(charInicial));
    }

  }
  return resultArr.join("");
}

console.log(rot13("SERR PBQR PNZC"));