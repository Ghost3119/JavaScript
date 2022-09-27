function convertToRoman(num) {
  var conversor = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };
  var romano = '';
  for (let i in conversor) {
    while (num >= conversor[i]) {
      romano += i;
      num -= conversor[i];
    }
  }
  return romano;

}


convertToRoman(4);
console.log(convertToRoman(4));